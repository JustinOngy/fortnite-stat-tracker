import React from "react";

const ProfileBanner = ({ playerstats }) => {
  return (
    <div className="profile-banner__bg">
      <div className="profile__image">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F102045941%2FFortnite-Profile-Pictures&psig=AOvVaw3xyVicgyz68Q2Rb7vPYC4d&ust=1709361802561000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJjejYq70oQDFQAAAAAdAAAAABAE"
          width={50}
          height={50}
          alt="profile-pic"
        />
      </div>
      <div className="profile__username">{playerstats.username}</div>
    </div>
  );
};

export default ProfileBanner;
