import React, { FC } from "react";
import NavbarItems from "./NavbarItems";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div className="h-12 w-full bg-neutral-900 bg-opacity-60 sticky top-0 flex justify-around">
      <div className="flex justify-around align-center gap-10">
        <NavbarItems title="Home" source="/" headerFlag={true} />
        <NavbarItems title="Project" source="/project" />
        <NavbarItems title="Work Experience" source="/project" />
        <NavbarItems title="About" source="/project" />
        <NavbarItems title="GitHub" source="https://github.com/airincs" />
      </div>
    </div>
  );
};

export default Navbar;
