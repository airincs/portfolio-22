import React, { FC } from "react";
import NavbarItems from "./NavbarItems";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

const Navbar: FC = () => {
  const router = useRouter();

  return (
    <div className="h-12 w-full bg-neutral-900 bg-opacity-60 sticky top-0 flex justify-around z-10">
      <div className="text-center text-sm md:text-md flex justify-around items-center gap-5 md:gap-10 mx-4 md:mx-0">
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
        <a href="https://github.com/airincs">
          <ReactMarkdown>
            ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
          </ReactMarkdown>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
