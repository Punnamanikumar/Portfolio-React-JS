import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/TechStacks/mani.png";
import boy1 from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const [openPopup,setOpenPopup] = useState(false)
  const [password, setPassword] = useState("");
  const [passwordField, setPasswordField] = useState(null);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handelPassword = (e) => {
    e.preventDefault();
    setOpenPopup(true);
    if (password !== process.env.REACT_APP_ACCESS_PASSWORD) {
      return passwordField.classList.add("error");
    }
    setOpenPopup(false);
    setPassword("");
    window.open(process.env.REACT_APP_RESUME);
  };
  return (
    <div className="Intro" id="Intro">
      { openPopup && 
      <div className="formComp">
        <div>Alert !!!</div>
        <button className="closebtn" onClick={()=>setOpenPopup(false)}><i className="fa fa-times" aria-hidden="true"></i></button>
        <div style={{ color: darkMode ? "white" : "" }}>Hello User! <br/>If you Want to Access Please Provide the Password or Contact Admin ... :)</div>
        <div className="password">
          <input type="text" className="user" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} ref={(input) => { setPasswordField(input); }}/>
          <button className="button" onClick={handelPassword}>Submit</button>
        </div>
      </div>}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Mani Kumar Punna</span>
          <span>{process.env.REACT_APP_INTRO_DESC}</span>
        </div>
        <div className="i-button">
          <span>
            <Link to="contact" smooth={true} spy={true}>
              <button className="button i-button1">Hire me</button>
            </Link>
          </span>
          <span>
            {process.env.REACT_APP_PUBLIC_ACCESS === "true" ? 
            <a href={process.env.REACT_APP_RESUME} target="_blank" rel="noreferrer" download>
              <button className="button i-button2">Download CV</button>
            </a>
            :
            <button className="button i-button2" onClick={handelPassword}>Download CV</button>
            }
          </span>
        </div>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" className="i-v1" />
        <img src={Vector2} alt="" className="i-v1" />
        {process.env.REACT_APP_PROFILE_IMAGE_ENABLED === "true" ? (
          <img src={boy} alt="" className="i-boy" />
        ) : (
          <img src={boy1} alt="" className="i-boy" />
        )}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="MERN" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="Web Designer" text2="" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
