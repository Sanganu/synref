function mySuperHero(name,power,land,gender,age,strength){
    this.name = name;
    this.power = power;
    this.land = land;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.addStrength = function(addStr){
       this.strength += addStr;
    };
    this.gotHurt = function(hurt){
      this.strength -= hurt;
    }
    this.printStatus = function(){
      console.log(`Name: ${this.name}
                  Power: ${this.power}
                  Land: ${this.land}
                  Age: ${this.age}
                  Gender: ${this.gender}
                  Strength: ${this.strength}
                  `);
      console.log('This is ',this);
    }
}

var superGirl = new mySuperHero("SuperGirl","Fly","World","F",20,1000);
var flash = new mySuperHero("Flash","Speed","Central City","M",23,2000);

console.log("The First Run");
superGirl.printStatus();
flash.printStatus();

console.log("The Second Run");
superGirl.addStrength(200);
superGirl.printStatus();
superGirl.laserVision = 340;

console.log("The Third Run")
superGirl.gotHurt(202);
superGirl.printStatus();
flash.gotHurt(300);
flash.printStatus();
