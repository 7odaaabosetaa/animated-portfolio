import "./hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  const textVarients = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat: Infinity,
        }


    }
  };

  const slideVarients = {
    initial: {
      x: 0
    },
    animate: {
      x: "-220%",
     
      transition: {
        repeat:Infinity,
        repeatType:"miror",
        duration: 20,
      },
    },
   
  };
  return (
    <div className="hero">
      <motion.div
        className="text"
        variants={textVarients}
        initial="initial"
        animate="animate"
      >
        <motion.span variants={textVarients}>
          Mahmoud Gomaa Abosetaa
        </motion.span>
        <motion.h3 variants={textVarients}>Front-End developer </motion.h3>
        <motion.div className="buttons" variants={textVarients}>
          <motion.a href="" variants={textVarients}>
            See the latest works{" "}
          </motion.a>
          <motion.a
            href=""
            whileHover={{ background: "transparent", color: "white" }}
            transition={{ duration: 0.5 }}
            variants={textVarients}
          >
            contact me{" "}
          </motion.a>
        </motion.div>
        <motion.a href="">
          <motion.img src="/scroll.png" alt="scroll button" animate="scrollButton" variants={textVarients}/>
        </motion.a>
      </motion.div>

      <motion.div className="slidingText" variants={slideVarients} animate="animate" initial="initial">creator influencer writer</motion.div>
      <div className="image">
        <img src="/hero.webp" alt="" />
      </div>
    </div>
  );
};

export default Hero;
