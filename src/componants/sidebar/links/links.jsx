import {motion } from "framer-motion"




const varients ={
    open:{
        transition: {
            staggerChildren: 0.1
        }},

        close:{
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    }

    
const itemVarients ={
    open:{
       y:0,
       opacity: 1},

        close:{
            y:50,
            opacity: 0.5

            
        }
    }

const Links = () => {

    
    const ArrayOfLInks= [{
        title:'Home page',
        href:"#hero"
},
{
    title:'services',
    href:"#services"
},
{
    title:'Portfolio',
    href:""
},
{
    title:'Contact',
    href:""
},
{
    title:'About',
    href:""
},
]
    return (
        <motion.div className="links" variants={varients}>
            {ArrayOfLInks.map((item )=>{
                return (<motion.a key={item} href={item.href } variants={itemVarients} whileHover={{scale: 1.2}} whileTap={{scale: 0.5}} >{item.title}</motion.a>)
            })}
            
        </motion.div>
    );
}

export default Links;
