function mychild(myname){
    this.myname = myname;
    this.displayFunction = function(){
      console.log(this.myname);

    }
}

module.exports = mychild;
