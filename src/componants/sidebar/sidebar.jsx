import Links from "./links/links";
import Togglebutton from "./togglebutton/togglebutton";
import "./sidebar.scss";
import { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const varients = {
    open: {
      clipPath: "circle(1000px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 90,

      }
    },
    close: {
      clipPath: "circle(30px at 50px 50px )",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 60,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "close"}>
      <motion.div className="bg" variants={varients}>
        <Links />
      </motion.div>
      <Togglebutton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
