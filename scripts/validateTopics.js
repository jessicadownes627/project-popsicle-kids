// scripts/validateTopics.js
import fs from "fs";
import path from "path";

// Load your data maps
import topicGroupsByAge from "../src/data/topicGroupsByAge.js";
import topicEmojis from "../src/data/topicEmojis.js";
import topicLabelMap from "../src/data/topicLabelMap.js";

// Paths to your age folders
const AGE_FOLDERS = {
  "5-7": path.resolve("src/data/promptDataForKids/5-7"),
  "8-10": path.resolve("src/data/promptDataForKids/8-10"),
  "11-13": path.resolve("src/data/promptDataForKids/11-13"),
};

// Collect all topics from topicGroupsByAge
const topicsFromGroups = Object.entries(topicGroupsByAge).flatMap(([age, groups]) =>
  Object.values(groups).flat()
);

// Collect all topics from emoji + label maps
const topicsFromEmojis = Object.keys(topicEmojis);
const topicsFromLabels = Object.keys(topicLabelMap);

// Collect all topics from file names in each folder
const topicsFromFolders = Object.values(AGE_FOLDERS).flatMap((folder) =>
  fs
    .readdirSync(folder)
    .filter((f) => f.endsWith(".js") && f !== "index.js")
    .map((f) => f.replace(".js", ""))
);

// Helper to find missing/extra
function diff(source, target) {
  return source.filter((item) => !target.includes(item));
}

// Run validations
console.log("🔎 Validating Topics...\n");

console.log("➡ Checking Groups vs Emojis...");
console.log(" Missing in Emojis:", diff(topicsFromGroups, topicsFromEmojis));
console.log(" Extra in Emojis:", diff(topicsFromEmojis, topicsFromGroups));

console.log("\n➡ Checking Groups vs Labels...");
console.log(" Missing in Labels:", diff(topicsFromGroups, topicsFromLabels));
console.log(" Extra in Labels:", diff(topicsFromLabels, topicsFromGroups));

console.log("\n➡ Checking Groups vs Folder Files...");
console.log(" Missing in Folders:", diff(topicsFromGroups, topicsFromFolders));
console.log(" Extra in Folders:", diff(topicsFromFolders, topicsFromGroups));

console.log("\n✅ Validation complete!");
