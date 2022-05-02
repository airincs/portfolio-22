import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Body from "../components/body/Body";

const Home: NextPage = () => {
  return (
    <div>
      <div className="font-custom1 smooth-scroll container mx-auto bg-zinc-900 text-stone-100 min-h-screen">
        <Body />
      </div>
    </div>
  );
};

export default Home;
