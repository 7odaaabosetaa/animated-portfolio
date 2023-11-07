import Sidebar from "../sidebar/sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="nav">
        <Sidebar/>
      <motion.div
        className="logo"
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Mahmoud Abosetaa
      </motion.div>
      <div className="social">
        {/*  */}
        <a href="">
          <motion.img
            src="../../public/facebook.png"
            alt=""
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </a>
        <a href="">
          <motion.img
            src="../../public/github.png"
            className="git"
            alt=""
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </a>
        <a href="">
          <motion.img
            src="../../public/linkedin.png"
            alt=""
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </a>
        <a href="">
          <motion.img
            src="../../public/whatsapp.png"
            alt=""
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
