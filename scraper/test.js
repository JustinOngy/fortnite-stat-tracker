// test.js

// Import the scrapePlayerRank function from RankScraper.js
const { scrapePlayerRank } = require("./RankScraper");

// Define a function to run the test
async function test() {
  try {
    // Call the scrapePlayerRank function with a Fortnite player's name
    const playerName = "Ninja"; // Replace 'Ninja' with the player's name you want to test
    const rank = await scrapePlayerRank(playerName);

    // Log the player's rank
    console.log(`Player ${playerName}'s rank: ${rank}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Run the test function
test();
