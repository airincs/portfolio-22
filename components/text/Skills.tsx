import React, { FC } from "react";
import ReactMarkdown from "react-markdown";

const Skills: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid gap-4 grid-cols-4 grid-row-4 font-custom1 bg-gradient-to-r from-slate-200 to-slate-300 p-4 ">
        <ReactMarkdown>
          ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
        </ReactMarkdown>
        <ReactMarkdown>
          ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![Next
          JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
        </ReactMarkdown>
        <ReactMarkdown>
          ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
        </ReactMarkdown>
        <ReactMarkdown>
          ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
        </ReactMarkdown>

        <ReactMarkdown>
          ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
        </ReactMarkdown>
        <ReactMarkdown>
          ![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray)
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Skills;
