// Complete Day 1 goals here
/*
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
  "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE1ODA0OTcxNzMyNjY1ODY5/wolfgang-mozart-9417115-2-402.jpg",
];

let links = [
  "https://www.youtube.com/watch?v=sbTVZMJ9Z2I",
  "https://www.youtube.com/watch?v=6Lpf4AQSLCg",
  "https://www.youtube.com/watch?v=BV7RkEL6oRc",
  "https://www.youtube.com/results?search_query=turkish+march+piano",
];
*/
let song1 = {
  title: "Moonlight Sonata 1st Movement",
  artist: "Beethoven",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg",
  link:   "https://www.youtube.com/watch?v=sbTVZMJ9Z2I"
}

let song2 = {
  title: "Moonlight Sonata 2nd Movement",
  artist: "Beethoven",
  image:   "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg",
  link:     "https://www.youtube.com/watch?v=6Lpf4AQSLCg"
}

let song3 = {
  title: "Moonlight Sonata 3rd Movement",
  artist: "Beethoven",
  image:   "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg",
  link:     "https://www.youtube.com/watch?v=BV7RkEL6oRc"
}

let song4 = {
  title: "Turkish March",
  artist: "Mozart",
  image:     "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE1ODA0OTcxNzMyNjY1ODY5/wolfgang-mozart-9417115-2-402.jpg",
  link: "https://www.youtube.com/results?search_query=turkish+march+piano"
}

let playlist = [song1, song2, song3, song4];

/*
let playlist2 = [{
  title: "Moonlight Sonata 1st Movement",
  artist: "Beethoven",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg",
  link:   "https://www.youtube.com/watch?v=sbTVZMJ9Z2I"
}, {
  title: "Moonlight Sonata 2nd Movement",
  artist: "Beethoven",
  image:   "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg",
  link:     "https://www.youtube.com/watch?v=6Lpf4AQSLCg"
}, {
  title: "Moonlight Sonata 3rd Movement",
  artist: "Beethoven",
  image:   "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg",
  link:     "https://www.youtube.com/watch?v=BV7RkEL6oRc"
}, {
  title: "Turkish March",
  artist: "Mozart",
  image:     "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE1ODA0OTcxNzMyNjY1ODY5/wolfgang-mozart-9417115-2-402.jpg",
  link: "https://www.youtube.com/results?search_query=turkish+march+piano"
}];
*/

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  playlist.forEach(function(song_object){
      $(".songs").append(`<p>${song_object.title}</p>`);
      $(".artists").append(`<p>${song_object.artist}</p>`);
      $(".images").append(`<img src="${song_object.image}">`);
      $(".links").append(`<a href="${song_object.link}"> click here </a>`);

    
  });
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
  let song_title = $(".title").val();
  let song_artist = $(".artist").val();
  let song_image = $(".image").val();
  let song_link = $(".link").val();
  let newsong = {
    title: song_title,
    artist: song_artist,
    image: song_image,
    link:  song_link
  }
  playlist.push(newsong);
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
