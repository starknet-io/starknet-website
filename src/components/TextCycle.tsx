"use client";
import React from "react";
import { motion } from "framer-motion";
const items = ["ようこそ"];
type Props = {};

export const TextCycle = (props: Props) => {
  const itemVariants = {
    initial: { x: "-100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <div>
      {items.map((item, i) => (
        <motion.div
          key={item}
          variants={itemVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3, delay: i * 0.8 }}
        >
          {items[i]}
        </motion.div>
      ))}
    </div>
  );
};
