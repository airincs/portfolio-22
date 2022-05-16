import TextItem from "../general/TextItem";

const ProjectBody = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-slate-100 to-slate-50 p-2 rounded-2xl shadow-inner shadow-black">
      <div className="bg-gradient-to-r from-slate-200 to-slate-300 p-8 m-2 rounded-2xl shadow-xl shadow-black/25 border-black">
        <span>
          Town Crossing is a social media platform where you can connect with
          your friends. The application was developed using primarily
          TypeScript, ReactJS, NodeJS, Mongoose, and Express. The application
          includes several different features, such as:
        </span>
      </div>
      <div>
        <TextItem text={`Functional backend database via MongoDB Atlas`} />
        <TextItem
          text={`Authentication and authorization via JSON Web Tokens (JWT)`}
        />
        <TextItem text={`State management via Redux`} />
        <TextItem text={`Form control and validation via Formik and Yup`} />
        <TextItem text={`UI Designed with Chakra-UI and Framer Motion`} />
        <TextItem text={`Fetching API with Axios`} />
        <TextItem
          text={`ThreeJS Model, created with Blender and implemented with React-Three-Fiber`}
        />
      </div>
    </div>
  );
};

export default ProjectBody;
