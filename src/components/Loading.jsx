import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className="haf">
      <div className="skel">
        <div id="first-skel">
          <Skeleton className="first-skel-skel" height={160} width={160} />
        </div>
        <div id="first-skel">
          <Skeleton className="second-skel-skel" height={160} width={160} />
        </div>
        <div id="first-skel">
          <Skeleton className="second-skel-skel"  height={160} width={160} />
        </div>
        <div id="first-skel">
          <Skeleton className="second-skel-skel"  height={160} width={160} />
        </div>
        <div>
          <Skeleton className="last-skel-skel"  height={160} width={160} />
        </div>
      </div>
      
    </div>
  );
};

export default Loading;
