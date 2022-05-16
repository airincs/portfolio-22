import type { NextPage } from "next";
import TextHeader from "../components/general/TextHeader";
import MotionContainer from "../components/MotionContainer";

const Project: NextPage = () => {
  return (
    <MotionContainer>
      <TextHeader title={"Town Crossing"} text={"Showcased Project"} />
    </MotionContainer>
  );
};

export default Project;
