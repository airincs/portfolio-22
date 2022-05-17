import React, { FC } from "react";
import ReactMarkdown from "react-markdown";

const ProjectHeader: FC = () => {
  return (
    <div className="flex flex-col items-center mx-24 bg-gradient-to-r from-slate-100 to-slate-50 p-2 rounded-2xl shadow-inner shadow-black">
      <a
        href="https://www.towncrossing.dev/"
        className="font-custom3 text-xl mb-2"
      >
        Click here to visit Town Crossing!
      </a>
      <a href="https://github.com/airincs/town-crossing-client">
        <ReactMarkdown>
          ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
        </ReactMarkdown>
      </a>
      <div className="grid gap-4 grid-cols-4 grid-row-2 mt-6 p-2">
        <ReactMarkdown>
          ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
        </ReactMarkdown>
        <ReactMarkdown>
          ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
          ](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ProjectHeader;
