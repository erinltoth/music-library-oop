function Library(name, creator) {
  this.name = name;
  this.creator = creator;

  this.playlists = [];

}

function Playlist(name) {
  this.name = name;
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}