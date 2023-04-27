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
                    <a href="https://icons8.com/icon/20909/html-5"><img src={html} alt="" /></a>
                </div>
                <div className="face2 facet">
                    <a href="https://icons8.com/icon/21278/css3"><img src={css} alt="" /></a>
                </div>
                <div className="face3 facet">
                    <a href="https://icons8.com/icon/108784/javascript"><img src={javascript} alt="" /></a>
                </div>
                <div className="face4 facet">
                    <a href="https://icons8.com/icon/54087/nodejs"><img src={nodejs} alt="" /></a>
                </div>
                <div className="face5 facet">
                    <a href="https://icons8.com/icon/9nLaR5KFGjN0/mysql-logo"><img src={mysql} alt="" /></a>
                </div>
                <div className="face6 facet">
                    <a href="https://icons8.com/icon/wPohyHO_qO1a/react"><img src={react} alt="" /></a>
                </div>
            </div>
    </div>
    )

}