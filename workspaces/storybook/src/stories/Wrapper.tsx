import React from "react";
import cx from "classnames";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Wrapper = ({ className = "", children }: Props) => {
  return (
    <div className={cx("bg-body p-4 w-1/2 flex gap-4 flex-wrap", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
