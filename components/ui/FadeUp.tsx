"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function FadeUp({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
      }}
    >
      {children}
    </motion.div>
  );
}