import type { NextPage } from "next";
import TextHeader from "../components/general/TextHeader";
import TextBlock from "../components/general/TextBlock";
import MotionContainer from "../components/MotionContainer";
import ProjectHeader from "../components/project/ProjectHeader";
import ProjectBody from "../components/project/ProjectBody";

const Project: NextPage = () => {
  return (
    <MotionContainer>
      <div className="flex flex-col gap-10 mb-5 text-center">
        <TextHeader
          title={"Town Crossing"}
          text={"Showcased Full-Stack Web Project"}
        />
        <ProjectHeader />
        <div>
          <img src="https://github.com/airincs/town-crossing-client/raw/main/src/assets/images/Home.PNG" />
        </div>
        <TextBlock
          title={"Introduction"}
          text={`
        Welcome to Town Crossing! Sign up, post a Note to the Bulletin, and check the weather... Stay a while!
        `}
        />
        <ProjectBody />
      </div>
    </MotionContainer>
  );
};

export default Project;
