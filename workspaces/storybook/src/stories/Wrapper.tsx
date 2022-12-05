import React from "react";

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return (
    <div className="bg-navbar p-4 w-96 flex gap-4 flex-wrap">{children}</div>
  );
};

export default Wrapper;
