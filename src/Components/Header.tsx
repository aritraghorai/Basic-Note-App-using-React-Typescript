import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="text-3xl w-full h-[50px] bg-blue-500 flex justify-center items-center text-white ">
      <a href="/">React TypeScript Notes App</a>
    </div>
  );
};

export default Header;
