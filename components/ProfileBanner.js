import Image from "next/image";
import React, { useState, useEffect } from "react";

const ProfileBanner = ({
  username,
  level,
  progress,
  kills,
  wins,
  matches,
  top3,
}) => {
  const [randomImage, setRandomImage] = useState("");

  // List of image file names
  const images = [
    "ppic.jpeg",
    "ppic2.jpeg",
    "ppic3.jpeg",
    "ppic4.jpeg",
    "ppic5.jpeg",
  ];

  // Function to choose a random image from the list
  const chooseRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  // Set random image upon component mount
  useEffect(() => {
    const randomImg = chooseRandomImage();
    setRandomImage(randomImg);
  }, []);

  const backgroundStyle = {
    backgroundImage: "url('/darkenbackground.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    color: "#fff",
  };

  return (
    <div className="profile-banner__bg" style={backgroundStyle}>
      <div className="profile__image">
        {/* Use the selected random image */}
        <Image
          src={`/${randomImage}`}
          width={100}
          height={100}
          alt="profile-pic"
        />
      </div>
      <div className="profile__username">{username.toUpperCase()}</div>{" "}
      <div className="profile__level">{level}</div>
      <div className="profile__progress-bar">{progress}</div>
      <div className="profile-main-stats__container">
        <StatDisplay src="/wins.png" label="Total Wins" value={wins} />
        <StatDisplay src="/levelup.png" label="Total Kills" value={kills} />
        <StatDisplay src="/games.png" label="Total Games" value={matches} />
        <StatDisplay src="/top3.png" label="Total Top 3" value={top3} />
      </div>
    </div>
  );
};

function StatDisplay({ src, label, value }) {
  return (
    <div className="text-center flex-1 flex flex-col items-center">
      <Image
        className="mb-2"
        src={src}
        alt={label}
        width={50}
        height={50}
        layout="fixed"
      />
      <h8 className="profile-stat-display_number">{value}</h8>
      <h1 className="profile-stat-display_text ">{label.toUpperCase()}</h1>
    </div>
  );
}

export default ProfileBanner;
