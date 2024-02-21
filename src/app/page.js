"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [gamertag, setGamertag] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [playerStats, setPlayerStats] = useState({
    wins: "",
    kills: "",
    matchesPlayed: "",
    level: "",
    username: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const apiKey = "89e0abb9-96bd-4a7e-bf11-5bda8df21b1c"; // Replace with your actual API key
      const response = await fetch(
        `https://fortnite-api.com/v2/stats/br/v2?name=${gamertag}&accountType=epic&timeWindow=lifetime&image=none`,
        {
          method: "GET",
          headers: {
            Authorization: apiKey,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setPlayerStats({
          username: data.data.account.name,
          wins: data.data.stats.all.overall.wins,
          kills: data.data.stats.all.overall.kills,
          matchesPlayed: data.data.stats.all.overall.matches,
          level: data.data.battlePass.level,
        });
      } else {
        setError("Failed to fetch data. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const mainBgStyle = {
    backgroundImage: "url('/Fortnite-bg.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <main
      style={mainBgStyle}
      className="flex min-h-screen flex-col items-center justify-between p-6 text-white bg-gray-900">
      <div className="max-w-2xl w-full p-10 bg-gradient-to-br from-blue-800 to-purple-900 mt-10 mb-0 rounded-lg shadow-lg">
        <h4 className="text-center text-lg font-bold mb-4">
          Fortnite Player Stats
        </h4>
        <form onSubmit={handleSubmit} className="mt-4 flex justify-center">
          <input
            type="text"
            value={gamertag}
            onChange={(e) => setGamertag(e.target.value)}
            className="form-input mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Gamertag"
            id="gamertag"
          />
          <button type="submit" className="flex items-center justify-center">
            <img
              src="/submit.png"
              alt="Submit"
              className="hover:opacity-75 h-14" // Example height adjustment
            />
          </button>
        </form>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : playerStats.username ? (
          <div className="mt-8">
            <h4 className="text-center text-2xl font-semibold mb-4">
              Level: {playerStats.level} | Player Name: {playerStats.username}
            </h4>
            <div className="flex justify-between items-center text-xl">
              <StatDisplay
                src="/wins.png"
                label="Wins"
                value={playerStats.wins}
              />
              <StatDisplay
                src="/levelup.png"
                label="Kills"
                value={playerStats.kills}
              />
              <StatDisplay
                src="/games.png"
                label="Matches Played"
                value={playerStats.matchesPlayed}
              />
              <StatDisplay
                src="/top3.png"
                label="Top 3"
                value={playerStats.kills}
              />
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}

function StatDisplay({ src, label, value }) {
  return (
    <div className="text-center flex-1 flex flex-col items-center">
      <Image src={src} alt={label} width={75} height={75} layout="fixed" />
      <p className="font-bold">{label}</p>
      <p>{value}</p>
    </div>
  );
}
