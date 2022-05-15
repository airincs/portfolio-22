import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeBody from "../components/home/HomeBody";

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-tl to-neutral-800 from-neutral-700">
      <div className="font-custom1 smooth-scroll container mx-auto px-4 md:px-16 min-h-screen overflow-y-auto">
        <HomeBody />
      </div>
    </div>
  );
};

export default Home;
