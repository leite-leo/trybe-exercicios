const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
for (let key in coolestTvShow) {
    console.log(key);
    console.log(coolestTvShow[key]);
}
    
  console.log(coolestTvShow['genre']);