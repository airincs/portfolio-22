import React from "react";

type AppProps = {
  text: String;
};

const TextItem = ({ text }: AppProps) => {
  return (
    <div className="bg-gradient-to-r from-slate-200 to-slate-300 m-1 p-2 pl-8 rounded-2xl shadow-xl shadow-black/25 border-black text-left">
      <p className="font-custom1 font-semibold text-md list-item">{text}</p>
    </div>
  );
};

export default TextItem;
