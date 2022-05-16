import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import TextHeader from "../components/general/TextHeader";

const About: NextPage = () => {
  return (
    <div className="bg-gradient-to-tl from-orange-100 to-red-200">
      <Navbar />
      <div className="font-custom1 smooth-scroll container mx-auto px-4 md:px-16 min-h-screen overflow-y-auto max-w-4xl">
        <TextHeader title={"Town Crossing"} text={"Showcased Project"} />
      </div>
    </div>
  );
};

export default About;