import type { NextPage } from "next";
import TextBlock from "../components/general/TextBlock";
import Skills from "../components/text/Skills";
import ProfessionalExperience from "../components/text/ProfessionalExperience";
import MotionContainer from "../components/MotionContainer";
import TextHeader from "../components/general/TextHeader";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <MotionContainer>
      <div className="flex flex-col gap-10 mb-5">
        <TextHeader title={"Noah Fisher"} text={"Front-End Developer"} />
        <TextBlock
          title={"Who Am I?"}
          text={`I specialize in Front-End Development, specifically with React;
          however, I am always looking for opportunities to learn! I've graduated University 
          with a B.S. in Statistics (Data Science focus). While studying Statistics
          and Data Science in University, I had begun developing a web scraper in Python.
          In order to use the scraper, I needed to learn basic HTML, which ultimately led to
          my discovery and love of Web Development.`}
        />
        <TextBlock title={"Skills & Technologies"} component={<Skills />} />
      </div>
    </MotionContainer>
  );
};

export default Home;
