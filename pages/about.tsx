import type { NextPage } from "next";
import TextHeader from "../components/general/TextHeader";
import TextBlock from "../components/general/TextBlock";
import MotionContainer from "../components/MotionContainer";

const About: NextPage = () => {
  return (
    <MotionContainer>
      <div className="flex flex-col gap-10 mb-5">
        <TextHeader title={"About Me"} text={"Noah Fisher"} />
        <TextBlock
          title={"Why Web Development?"}
          text={`
          During the beginning of University, I learned the fundamentals of Computer Science with
          C++ and then transitioned to using Python exclusively for its Data Science benefits. 
          I had then begun  developing a web scraper in Python. In order to use the scraper, I needed 
          to learn basic HTML, which ultimately led to my discovery and love of Web Development. 
          I love the dynamics of Web Development, it's a breath of fresh air to me!`}
        />
        <TextBlock
          title={"Personal Interests"}
          text={`
          I greatly enjoy learning in general, whether that be Computer Science related or not! 
          I've been trying to further understand Data Structures and Algorithms. If I'm
          not on a computer, I'm probably out with friends or lifting weights! 
          `}
        />
      </div>
    </MotionContainer>
  );
};

export default About;
