import type { NextPage } from "next";
import TextHeader from "../components/general/TextHeader";
import MotionContainer from "../components/MotionContainer";

const WorkExperience: NextPage = () => {
  return (
    <MotionContainer>
      <TextHeader title={"Work Experience"} text={"My Professional History"} />
    </MotionContainer>
  );
};

export default WorkExperience;
