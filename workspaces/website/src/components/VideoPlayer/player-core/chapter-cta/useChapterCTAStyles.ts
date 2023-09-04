export const useChapterCTAStyles = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  const fontSize = `${height / 57}px`;
  const borderRadius = `${height / 30}px`;
  const paddingY = `${height / 100}px`;
  const paddingX = `${height / 50}px`;
  const gap = `${height / 50}px`;
  const top = `${height / 1.6}px`;
  const leftCTAStart = `${width / 14}px`;
  const rightCTAStart = `${width / 1.96}px`;

  return {
    fontSize,
    borderRadius,
    paddingY,
    paddingX,
    gap,
    top,
    leftCTAStart,
    rightCTAStart,
  };
};
