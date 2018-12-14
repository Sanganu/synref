var mychild = require('./nestconst_1.js');
var parent = function(){
    this.mychild = []

    this.createChild = function(childname) {
        var mychild1 = new mychild(childname);
        this.mychild.push(mychild1);
    }
    this.displayAllChild = function(){
      for(i =0; i < this.mychild.length; i++)
       {
         this.mychild[i].displayFunction();
       }
    }
}
var parentInstance = new parent();
parentInstance.createChild("Child1");
parentInstance.displayAllChild();
parentInstance.createChild("Child2");
parentInstance.displayAllChild();
