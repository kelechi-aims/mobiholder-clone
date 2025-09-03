import React from "react";
import Subscription from "./Subscription";
import UpcomingSubscriptions from "./UpcomingSubscriptions";

const ThirdComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
      <Subscription />
      <UpcomingSubscriptions />
    </div>
  );
};

export default ThirdComponent;
