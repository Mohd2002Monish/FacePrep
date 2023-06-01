import React from "react";

function Loading({ users }) {
  console.log();
  var arr = [0, 1, 2];

  return (
    <div className="contact-list">
      {arr.map((el) => {
        return (
          <div key={el} className="skeleton">
            <div className="skeleton-avatar"></div>
            <div className="skeleton-details">
              <div className="skeleton-name"></div>
              <div className="skeleton-info"></div>
              <div className="skeleton-info"></div>
              <div className="skeleton-info"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Loading;
