/**
 * Module dependencies.
 */

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

/**
 * Constans.
 */

const divider = '-'.repeat(200);
const rootDirectory = path.resolve(__dirname, '..');
const directory = path.join(rootDirectory, 'public', 'assets');
const maxFileSize = 1048576; // 1MB

/**
 * `logger`.
 */

const logger = {
  error: message => console.log(chalk.red(message)),
  info: message => console.log(chalk.blue(message)),
  warn: message => console.log(chalk.yellow(message))
}

/**
 * `getImageSize`.
 */

function getImageSize(filePath) {
  return fs.statSync(filePath)?.size;
}

/**
 * `setFormat`.
 */

function getImage(filePath, quality) {
  const image = sharp(filePath);
  const extension = path.extname(filePath).toLowerCase();

  switch (extension) {
    case '.jpg':
    case '.jpeg':
      return image.jpeg({ quality });

    case '.png':
      return image.png({ compressionLevel: Math.max(1, Math.floor(quality / 10)) });

    case '.webp':
      return image.webp({ quality });

    default:
      logger.warn(`Unsupported file format for: ${filePath}`);
      logger.info(divider);

      return null;
  }
}

/**
 * `compressImage`.
 */

function compressImage(filePath, quality) {
  if (quality < 25) {
    logger.warn(`Minimum quality reached but file size is still above 1MB for: ${filePath}`);
    logger.info(divider);

    return;
  }

  const image = getImage(filePath, quality);
  const originalSize = getImageSize(filePath);

  if (!image) {
    return;
  }

  image.toBuffer((err, buffer) => {
    if (err) {
      logger.error(`Error compressing the image: ${filePath}`);
      logger.error(`${err}`);
      logger.info(divider);

      return;
    }

    fs.writeFileSync(filePath, buffer);

    const compressedSize = getImageSize(filePath);

    if (compressedSize > maxFileSize) {
      compressImage(filePath, quality - 5);
    } else {

      const compression = ((originalSize - compressedSize) / originalSize * 100).toFixed(2);

      logger.info(`Compressed image replaced: ${filePath}, Compression: ${compression}%`);
      logger.info(divider);
    }
  });
}

/**
 * Read the directory and compress all images.
 */

fs.readdir(directory, (err, files) => {
  if (err) {
    logger.error(`Error reading the directory: ${err}`);

    return;
  }

  files.forEach(file => {
    compressImage(path.join(directory, file), 75);
  });
});