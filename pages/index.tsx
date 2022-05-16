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
    </MotionContainer>
  );
};

export default Home;
