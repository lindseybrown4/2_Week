//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      this is not assigned a value until an object invokes the function where this is defined

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      Implicit Binding: when you invoke the function, **look to the left of the dot
          and that is what it is referencing. "Imply, Guess, assume!" How its called is what
          decideds how it will be used. Not bound to anything, only bound at one moment in time.

          aj = {age: 28, name: "AJ"}

          aj.isOver25() {
            if(this.age > 25) {
              return true;
            }
          }


      Explicit Binding: if you use .call or .apply at the call site both of those utilities
      take as their first parameter a this.binder. 

      var binder = showSkills.bind(aj) //when we do this we are invoking bind. it is a built in java
      //script function. 
      binder = function showSkills(obj) {
        return aj.skills
      }
      binder() // we dont need to put aj next to binder bc bind already did it above

      

      New Binding:


      Window Binding: 

  // 3) What is the difference between call and apply?

     
     call requires the parameters be listed explicitly. 
     apply lets you invoke the function with arguments as an array;

     A useful mnemonic 
        is "A for array and C for comma."
      

  // 4) What does .bind do?

      //Answer


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

var prius = Car('Toyota', 'Prius', 2011);
var mustang = Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here



//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
