// React core
import React from "react";

// Note the curly braces around props, to allow to prepare to break down the object into individual variables
export default function Card({ data }) {
  // Here is where we do the break down the data
  const {
    id,
    title,
    description,
    channelName,
    channelThumb,
    views,
    videoThumb,
  } = data;


  return (
    <article className="card">
    <a href="#">
      <img className="thumbnail" src={videoThumb} alt={description}></img>
    </a>

    {/* This could be a sub-component (atom)? */}
    <aside className="meta-data">
      <div className="left">
        <img
          className="channel-thumb"
          src={channelThumb}
          alt="Channel thumbnail"
        />
      </div>
      <div className="right">
        <h3 className="title">{title}</h3>
        <p className="description">{channelName}</p>
        <p className="description">{views} views</p>
      </div>
    </aside>
  </article>
  );
}
