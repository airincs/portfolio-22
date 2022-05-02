import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Body from "../components/body/Body";

const Home: NextPage = () => {
  return (
    <div className="font-custom1 smooth-scroll container mx-auto bg-indigo-200 min-h-screen">
      <Body />
    </div>
  );
};

export default Home;
