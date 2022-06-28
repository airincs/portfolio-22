import type { NextPage } from "next";
import TextBlock from "../components/general/TextBlock";
import Skills from "../components/text/Skills";
import MotionContainer from "../components/MotionContainer";
import TextHeader from "../components/general/TextHeader";

const Home: NextPage = () => {
  return (
    <MotionContainer>
      <div className="flex flex-col gap-10 mb-5">
        <TextHeader title={"Noah Fisher"} text={"Data Analyst"} />
        <TextBlock
          title={"Who Am I?"}
          text={`I specialize in Data Analysis, specifically with Python;
          however, I am always looking for opportunities to learn! I've graduated University 
          with a B.S. in Statistics (Data Science focus). While studying Statistics
          and Data Science in University, I had learned how to develop web scrapers via Python.
          In order to use scrapers, I had to learn basic HTML, which ultimately led to
          my discovery and hobby of Web Development.`}
        />
        <div className="flex flex-col items-center p-4 antialiased tracking-wide shadow-inner shadow-black rounded-2xl bg-gradient-to-r from-slate-100 to-slate-50">
          <p className="font-custom3 text-2xl animate-bounce">
            <a href="/NoahResume.pdf" target="_blank">
              Click for Resume!
            </a>
          </p>
        </div>
        <TextBlock title={"Skills & Technologies"} component={<Skills />} />
      </div>
    </MotionContainer>
  );
};

export default Home;
