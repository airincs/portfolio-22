import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar/Navbar";
import Model from "../components/general/Model";
import TextBlock from "../components/general/TextBlock";
import Skills from "../components/text/Skills";
import ProfessionalExperience from "../components/text/ProfessionalExperience";
import TextHeader from "../components/general/TextHeader";

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-tl from-orange-100 to-red-200">
      <Navbar />
      <div className="font-custom1 smooth-scroll container mx-auto px-4 md:px-16 min-h-screen overflow-y-auto">
        <div className="flex flex-col justify-center gap-y-8">
          <Model />
          <TextHeader title={"Noah Fisher"} text={"Front-End Developer"} />
          <TextBlock
            title={"About"}
            text={
              "During University I studied Statistics with a Data Science focus. One day I had started learning how to web scrape with Python..."
            }
          />
          <TextBlock title={"Skills"} component={<Skills />} />
          <ProfessionalExperience />
        </div>
      </div>
    </div>
  );
};

export default Home;
