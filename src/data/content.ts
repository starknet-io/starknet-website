interface Content {
  readonly path: string;
  readonly title: string;
  readonly MDXContent: React.Component;
}

function mdxToContent({ default: MDXContent, path, title }: any): Content {
  return { MDXContent, path, title };
}

export async function getContentByFilename(
  filename: string,
  locale: string,
): Promise<Content> {
  try {
    return mdxToContent(
      (await import(`../../content/${locale}/${filename}.md`)).default,
    );
  } catch (err) {}

  try {
    return mdxToContent(
      (await import(`../../content/en/${filename}.md`)).default,
    );
  } catch (err) {}

  throw new Error(`Content not found! ${filename}`);
}

export async function getContentByPage(
  page: string,
  locale: string,
): Promise<Content> {
  return getContentByFilename(page.replace(/(^\/|\/$)/g, ""), locale);
}
