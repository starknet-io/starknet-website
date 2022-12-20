import React from "react";

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return (
    <div className="bg-body p-4 w-1/2 flex gap-4 flex-wrap">{children}</div>
  );
};

export default Wrapper;
