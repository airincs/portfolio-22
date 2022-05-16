import React from "react";
import { motion } from "framer-motion";

const MotionContainer = ({ children }: any) => {
  return (
    <div className="overflow-y-hidden">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.75 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MotionContainer;
