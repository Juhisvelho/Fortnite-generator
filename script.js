landingLocations = ["Rebel's Roost","Lavish Lair","Classy Courts","Ritzy Riviera","Reckless Railways","Grand Glacier","Ruined Reels","Pleasant Piazza","Fencing Fields","Hazy Hillside","Snooty Steppes", "any unnamed location"]

function generate() {
    landing = landingLocations[Math.floor(Math.random() * landingLocations.length)]
    document.getElementById("output").innerText = landing
}