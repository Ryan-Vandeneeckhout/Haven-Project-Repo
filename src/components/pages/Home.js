import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [productItem, setProductItem] = useState([]);
  const [errorAPI, setErrorAPI] = useState("");

  // UseEffect Call Once for a Random Quote in Banner//
  useEffect(() => {
    axios({
      method: "GET",
      url: ` https://haven-nodejs.herokuapp.com/activities`,
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.token,
      },
    })
      .then((jsonResponse) => {
        setProductItem(jsonResponse.data);
      })
      .catch((err) => {
        //Api error handling.
        if (err.message === "Not Found") {
          setErrorAPI("Something went wrong.");
        } else {
          setErrorAPI("Please try again.");
        }
      });
  }, []);

  const renderActviityPosts = () => {
    // API Return Success //
    if (productItem !== []) {
      return (
        <section className="homeSection">
          <div className="wrapper10">
            <ul className="activityList">
              {productItem.map((post, index) => (
                <div className="activityItem" key={index}>
                  <h3>{post.title}</h3>
                  <li className="middle-row">
                    <p>{post.content}</p>
                    <p>{post.budget}</p>
                  </li>
                  <div className="bottom-row">
                    <p>{post.budget}</p>
                    <p>{`${post.spots_open}/${post.spots_total} participants`}</p>
                    <button className="join-button">Join Activity!</button>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </section>
      );
    } else {
      //Return Error on API Failed//
      return <p>{errorAPI}</p>;
    }
  };
  return <>{renderActviityPosts()}</>;
}

export default Home;
