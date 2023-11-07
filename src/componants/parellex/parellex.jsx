
import "./parellex.scss";
import {motion,useScroll} from "framer-motion"
const Parellex = ({type}) => {
    return (
        <div className="parellex" style={{background: type =="services"? "linear-gradient(180deg,#111132,#0c0c1d)":"linear-gradient(180deg,#111132,#505046)"}}>
                <h2>{type =="portfolio"?"what we Did": "what we do" }</h2>
                <div className="mountains">
                </div>
                <div className="planets"></div>
                {/* <div className="planets"></div> */}
                {type=="portfolio" ?<div className="sun"></div> :""}
                <div className="stars"></div>
        </div>
    );
}

export default Parellex;
