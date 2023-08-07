import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../assets/svg/icons8-menu.svg";

export default function Pointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="box"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
        restDelta: 0.001
      }}
    />
  );
}
