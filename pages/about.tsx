import type { NextPage } from "next";
import TextHeader from "../components/general/TextHeader";
import MotionContainer from "../components/MotionContainer";

const About: NextPage = () => {
  return (
    <MotionContainer>
      <TextHeader title={"Town Crossing"} text={"Showcased Project"} />{" "}
    </MotionContainer>
  );
};

export default About;
