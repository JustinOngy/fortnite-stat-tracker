import React from "react";

const StatsBox = ({ title, stats }) => {
  const formatKeyForDisplay = (key) => {
    const keyMappings = {
      winPercentage: "WIN %",
    };
    return (
      keyMappings[key] || key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase()
    );
  };

  return (
    <>
      <div className="">
        <h1 className="title text-3xl text-white ">{title.toUpperCase()}</h1>
      </div>
      <div className="stats-box border flex justify-around ">
        {Object.entries(stats).map(([key, value]) => (
          <div
            key={key}
            className={`${key.replace(/\s+/g, "-").toLowerCase()} flex-1`}>
            <div className="text-center p-10">
              <p className="text-2xl">{value}</p>
              <p>{formatKeyForDisplay(key)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatsBox;
