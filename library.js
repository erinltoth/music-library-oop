function convertLength(sec) {
  let minutes = String(Math.floor(sec / 60));
  let seconds = String(sec % 60);
  return `${minutes}:${seconds}`;
}

function Library(name, creator) {
  this.name = name;
  this.creator = creator;

  this.playlists = [];

  this.addPlaylist = function(PL) {
    this.playlists.push(PL);
  }

}

function Playlist(name) {
  this.name = name;

  this.tracks = [];

  this.overallRating = function(PL) {
    let sum = 0;
    PL.tracks.forEach(track => {
      sum += track.rating;
    })
    return `Average rating is ${Math.round(sum / PL.tracks.length * 100) / 100}`;
  }

  this.overallLength = function(PL) {
    let totalLength = 0;
    PL.tracks.forEach(track => {
      totalLength += track.length;
    })
    return `Total length is ${convertLength(totalLength)}`;
  }

  this.addTracks = function(track) {
    this.tracks.push(track);
  }
}

function Track(title, artist, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
  this.artist = artist;


}

const erinLibrary = new Library('Good Stuff', 'Erin');
const ladiesOnly = new Playlist('Ladies Only');
erinLibrary.addPlaylist(ladiesOnly);

ladiesOnly.addTracks(new Track('Pynk', 'Janelle Monae', 5, 240));
ladiesOnly.addTracks(new Track('Begonia', 'Juniper', 4, 195));
ladiesOnly.addTracks(new Track('Lost On You', 'LP', 3, 268));
ladiesOnly.addTracks(new Track('Done', 'Frazey Ford', 4, 281));
ladiesOnly.addTracks(new Track('Hunger', 'Florence + The Machine', 4, 215));
ladiesOnly.addTracks(new Track('Praying', 'Kesha', 3, 230));
ladiesOnly.addTracks(new Track('My Church', 'Maren Morris', 3, 181));
ladiesOnly.addTracks(new Track('This is Me', 'Keala Settle', 4, 234));

console.log(ladiesOnly.tracks);

console.log(ladiesOnly.overallRating(ladiesOnly));
console.log(ladiesOnly.overallLength(ladiesOnly));
