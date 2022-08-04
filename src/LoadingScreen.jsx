import React from "react";
import "./sass/_loadingScreen.scss"; 

const LoadingScreen = (props) => {

    return (
        <section onClick={props.LoadingScreenClicked} className="LoadingScreenSection">
            <div className="LoadingScreenCircle">
                <h1>H</h1> {/*Have Jing create a custom svg with a stylized H as a logo*/}
                {props.loadingScreen && <h2>Click to Login</h2>}
            </div>
        </section>
    )
}
export default LoadingScreen; 