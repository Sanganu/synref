var show= function(name,genre,rating,network,summary){
  this.name = name;
  this.genre = genre;
  this.rating = rating;
  this.network = network;
  this.summary = summary;
  this.printDetails = function(){
    var returnarr = [`
      Name of the show:${this.name}
      Genre:${this.genre}
      Rating:${this.rating}
      Network:${this.network}
      Summary:${this.summary}`];
    console.log(returnarr.join(" "));
    return(returnarr.join(" "));
   }
}

module.exports = show;
