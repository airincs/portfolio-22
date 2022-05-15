import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeBody from "../components/home/HomeBody";
import Link from "next/link";
import ProjectHeader from "../components/project/ProjectHeader";
import Navbar from "../components/navbar/Navbar";

const Project: NextPage = () => {
  return (
    <div className="bg-gradient-to-tl from-orange-100 to-red-200">
      <Navbar />
      <div className="font-custom1 smooth-scroll container mx-auto px-4 md:px-16 min-h-screen overflow-y-auto">
        <ProjectHeader />
      </div>
    </div>
  );
};

export default Project;
