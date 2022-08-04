import React from "react";
import  "./activityPost.css"
import {DateTime} from "luxon"

function ActivityPost(props) {
console.log(props)
  return (
    <section className="onBoardingWrapper">
      <div className="wrapper10">
        <h2>{props.post.title}</h2>
        <h4>By {props.post.username}</h4>
        <p>{props.post.content}</p>
        <div>
         {DateTime.fromISO(props.post.created_at).toRelative()}
        </div>
        <div className="bottom-row">
            <p>{props.post.budget}</p>
            <p>{`${props.post.spots_open}/${props.post.spots_total} participants`}</p>
            <button className="join-button">Join Activity!</button>
        </div>
      </div>
    </section>
  );
}

export default ActivityPost;