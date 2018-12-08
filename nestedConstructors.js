var Recipe = function(name,serving,prepTime){
 this.recipeName = name;
 this.servingSize = serving;
 this.prepTime = prepTime;
 this.ingredients =[];
 var ingredient = function(iname,qty,unit,stock){
     this.iname = iname;
     this.qty = qty;
     this.unit = unit;
     this.stock = stock;
     this.displayIngredient =  function(){
       console.log(`Ingredient Name: ${this.iname}
                    qty: ${this.qty}
                    unit: ${this.unit}
                    stock: ${this.stock}`);
     }
  }
  this.getIngredients = function(){
    this.ingredients.push(new ingredient("Flour",2,"lbs",true));
  }
  this.displayRecipe = function(){
    this.getIngredients();
    console.log(`Name: ${this.recipeName}\nServing:${this.servingSize}\nPrep Time:${this.prepTime}\nRoutes:${this.ingredients[0]}`);
    console.log("From Parent Constructo - calling child method");
    this.ingredients[0].displayIngredient();
  }
}

var myRecipe = new Recipe("Batura",4,60);
console.log("The Main Program - Using Constructor");
myRecipe.displayRecipe();
console.log("Main Program - referring Nested Child methos");
myRecipe.ingredients[0].displayIngredient(); 
