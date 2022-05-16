import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar/Navbar";
import ModelContainer from "../components/general/ModelContainer";
import TextBlock from "../components/general/TextBlock";
import Skills from "../components/text/Skills";
import ProfessionalExperience from "../components/text/ProfessionalExperience";
import TextHeader from "../components/general/TextHeader";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-10">
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
  );
};

export default Home;
