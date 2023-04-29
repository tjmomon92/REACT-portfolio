// import { useEffect, useState } from "react";
import html from "../Assets/img/icons8-html-5-96.png"
import css from "../Assets/img/icons8-css3-96.png"
import javascript from "../Assets/img/icons8-javascript-96.png"
import nodejs from "../Assets/img/icons8-nodejs-96.png"
import mysql from "../Assets/img/icons8-mysql-logo-96.png"
import react from "../Assets/img/icons8-react-96.png"

export const MyCube = () => {
    return (
        <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1 facet">
                    <img src={html} alt="" />
                </div>
                <div className="face2 facet">
                    <img src={css} alt="" />
                </div>
                <div className="face3 facet">
                    <img src={javascript} alt="" />
                </div>
                <div className="face4 facet">
                    <img src={nodejs} alt="" />
                </div>
                <div className="face5 facet">
                    <img src={mysql} alt="" />
                </div>
                <div className="face6 facet">
                    <img src={react} alt="" />
                </div>
            </div>
    </div>
    )

}