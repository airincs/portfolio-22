import React, { FC } from "react";

const About: FC = () => {
  return (
    <div className="flex flex-col m-16">
      <p className="font-custom3 text-xl underline decoration-4 underline-offset-8">
        About Me
      </p>
      <p className="font-custom1 mt-4">
        During University I studied Statistics with a Data Science focus. One
        day I had started learning how to web scrape with Python...
      </p>
    </div>
  );
};

export default About;
