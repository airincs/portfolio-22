import React from "react";
import Link from "next/link";

type AppProps = {
  title: string;
  source: string;
  headerFlag?: boolean;
};

const NavbarItems = ({ title, source, headerFlag = false }: AppProps) => {
  return (
    <Link href={source}>
      {headerFlag ? (
        <div className="text-xl underline decoration-2 underline-offset-4 h-full w-50 flex flex-col text-white justify-center cursor-pointer">
          <span>{title}</span>
        </div>
      ) : (
        <div className="h-full w-50 flex flex-col text-white justify-center cursor-pointer">
          <span>{title}</span>
        </div>
      )}
    </Link>
  );
};

export default NavbarItems;
