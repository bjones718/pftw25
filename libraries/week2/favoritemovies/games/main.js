const myGames = [
  {
      name: "Destiny",
      type: "Online First-Person Shooter game",
      rating: "T for Teen",
      numberOfPlayers: "Multi-Player",
      shortDesc: "Players take on role of guardian- the protectors of earth's last saved city- and protect the city and the human race at all costs.", 

  },
  {
      name: "Madden 2024",
      type: "Online 1v1 game",
      rating: "T for Teen",
      numberOfPlayers: "1v1 with multi-player options",
      shortDesc: "NFL football game, game management and season simulation game.",
  },
  {
      name: "Halo",
      type: "Online First-Person Shooter game",
      rating: "T for Teens",
      numberOfPlayers: "Multi-Player",
      shortDesc: "Military science fiction game battling the Covenant and the species that follow it.",
  

}
]
//prompt user
let userInput = prompt("I have 3 of my favorite games in my collection. Pick a number between 1 and 3 and I'll tell you about that game");

userInput = Number(userInput);

// output message
alert("You have chosen " + myGames[userInput - 1].name +  " which is a " + myGames[userInput - 1].type +  " game. It can be played by " + myGames[userInput - 1].numberOfPlayers + ". The game is rated " + myGames[userInput - 1].rating +  ". Here's a short description: " + myGames[userInput - 1].shortDesc);