var actor = function(name,birthday,gender,country,url){
  this.name = name;
  this.birthday = birthday;
  this.gender = gender;
  this.country = country;
  this.url = url;
  this.printDetails = function(){
    var returnarr =[`
      Actor Name:${this.name}
      Gender:${this.gender}
      Birthday${this.birthday}
      Country:${this.country}
      URL:${this.url}`];
      console.log(returnarr.join(" "));
      return(returnarr.join(" "));
  }
}
module.exports = actor;
