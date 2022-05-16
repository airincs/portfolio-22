import React, { FC } from "react";
import NavbarItems from "./NavbarItems";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar: FC = () => {
  const router = useRouter();

  return (
    <div className="h-12 w-full bg-neutral-900 bg-opacity-60 sticky top-0 flex justify-around z-10">
      <div className="flex justify-around align-center gap-10">
        <NavbarItems
          title="Home"
          source="/"
          headerFlag={router.pathname == "/" ? true : false}
        />
        <NavbarItems
          title="Project"
          source="/project"
          headerFlag={router.pathname == "/project" ? true : false}
        />
        <NavbarItems
          title="Work Experience"
          source="/workexperience"
          headerFlag={router.pathname == "/workexperience" ? true : false}
        />
        <NavbarItems
          title="About"
          source="/about"
          headerFlag={router.pathname == "/about" ? true : false}
        />
        <NavbarItems title="GitHub" source="https://github.com/airincs" />
      </div>
    </div>
  );
};

export default Navbar;
