

import { motion, MotionStyle, MotionValue, PanInfo } from "framer-motion";
import React, { FunctionComponent } from "react";

interface CarouselInnerProps {
  index: number;
  renderCarouselInner: (props: { index: number }) => JSX.Element;
  x: MotionValue;
  onDragEnd(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void;
  onDrag(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void;
}

const pageStyle: MotionStyle = {
  position: "absolute",
  overflow: "visible",
  width: "100%",
  height: "100%",
};

export const CarouselInner: FunctionComponent<CarouselInnerProps> = ({
  index,
  renderCarouselInner,
  x,
  onDragEnd,
  onDrag
}) => {
  const child = React.useMemo(() => renderCarouselInner(
    { index }),
    [index, renderCarouselInner]
  );

  return (
    <motion.div
      style={{
        ...pageStyle,
        x,
        left: `${index * 100}%`,
        right: `${index * 100}%`,
      }}
      draggable
      drag="x"
      dragElastic={1}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
    >
      {child}
    </motion.div>
  );
};
