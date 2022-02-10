// Complete Day 1 goals here
let songs = [
  "Moonlight Sonata 1st movement",
  "Moonlight Sonata 2nd movement",
  "Moonlight Sonata 3rd movement",
  "Turkish March",
];

let artists = ["Beethoven", "Beethoven", "Beethoven", "Mozart"];

let images = [
  "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg",
  "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE1ODA0OTcxNzMyNjY1ODY5/w   olfgang-mozart-9417115-2-402.jpg",
];

let song_links = [
  "https://www.youtube.com/watch?v=sbTVZMJ9Z2I",
  "https://www.youtube.com/watch?v=6Lpf4AQSLCg",
  "https://www.youtube.com/watch?v=BV7RkEL6oRc",
  "https://www.youtube.com/results?search_query=turkish+march+piano",
];
function displaySongInfo() {
  // Complete the Day 2 goals inside this function
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
