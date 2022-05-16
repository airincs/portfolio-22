import type { NextPage } from "next";
import TextHeader from "../components/general/TextHeader";
import TextBlock from "../components/general/TextBlock";
import MotionContainer from "../components/MotionContainer";

const WorkExperience: NextPage = () => {
  return (
    <MotionContainer>
      <div className="flex flex-col gap-10 mb-5">
        <TextHeader
          title={"Work Experience"}
          text={"My Professional Work History"}
        />
        <TextBlock
          title={"Pharmacy Technician"}
          text={`I've been working in a pharmacy as a Pharmacy Technician for the last 4 years!
          Being a technician means that I deal with prescriptions, patients, and physicians. 
          From filling prescriptions, to talking to physicians, to working with the general public, 
          I've done it all! I've learned how to work with a small team of people and how to handle
          myself in a professional work setting. Additionally, due to my experience, I was given the 
          opportunity to be a travel pharmacy technician for the company I worked for.`}
        />
        <TextBlock
          title={"Statistical Consulting"}
          text={`The University I attended had a well established consulting program for its Statistics
          students. I spent several semesters heavily involved in the program, learning how to work for
          a client and their needs. One notable client was a PhD candidate and their thesis. Their thesis
          dealt with an elaborate pharmaceutical study. I led a small team to analyze and write a report
          about the study, which was later used in their thesis.`}
        />
      </div>
    </MotionContainer>
  );
};

export default WorkExperience;
