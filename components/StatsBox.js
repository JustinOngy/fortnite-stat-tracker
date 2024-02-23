import Image from "next/image";
import React from "react";
import "../src/app/globals.css";

const StatsBox = ({ title, stats }) => {
  const formatKeyForDisplay = (key) => {
    const keyMappings = {
      winPercentage: "WIN %",
    };
    return (
      keyMappings[key] || key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase()
    );
  };

  const gradients = {
    Solo: "linear-gradient(to right, #f98033, #c04404)",
    Duos: "linear-gradient(to right, #18dcec, #089cac)",
    Squads: "linear-gradient(to right, #d464f3, #9824b4)",
  };

  const bgStyle = {
    backgroundImage:
      gradients[title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()] ||
      "linear-gradient(to right, #999, #ccc)",
  };

  return (
    <>
      <div className="mt-10 flex items-center" style={bgStyle}>
        <Image
          src={`/${title}.png`}
          width={40}
          height={40}
          className="ml-5"
          alt={`${title} icon`}
        />
        <h1 className="title h1-font-size text-white mr-5">
          {title.toUpperCase()}
        </h1>
      </div>

      <div className="stats-box border flex flex-row justify-around  ">
        {Object.entries(stats).map(([key, value]) => (
          <div
            key={key}
            className={`${key.replace(/\s+/g, "-").toLowerCase()} flex-1`}>
            <div className="text-center p-10">
              <p className="text-3xl">{value}</p>
              <p className="text-2xl">{formatKeyForDisplay(key)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatsBox;
