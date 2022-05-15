import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeBody from "../components/home/HomeBody";
import Navbar from "../components/navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-tl from-orange-100 to-red-200">
      <Navbar />
      <div className="font-custom1 smooth-scroll container mx-auto px-4 md:px-16 min-h-screen overflow-y-auto">
        <HomeBody />
      </div>
    </div>
  );
};

export default Home;
