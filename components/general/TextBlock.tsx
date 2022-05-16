import React from "react";

type AppProps = {
  title?: String;
  text?: String;
  component?: React.ReactNode;
};

const TextBlock = ({ title, text, component }: AppProps) => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-slate-100 to-slate-50 p-8 rounded-2xl shadow-inner shadow-black">
      {title ? <p className="font-custom3 text-xl">{title}</p> : null}
      <div className="bg-gradient-to-r from-slate-200 to-slate-300 mt-4 p-8 rounded-2xl shadow-xl shadow-black/25 border-black">
        {component ? (
          component
        ) : (
          <p className="font-custom1 font-medium">{text}</p>
        )}
      </div>
    </div>
  );
};

export default TextBlock;
