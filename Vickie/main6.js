
let currentDay = +prompt("Please enter a number 1 to 7:");

switch(currentDay) {
    case 1:
       console.log("oh No it is Sunday, back to work tomorrow!");
       break;
 
    case 2:
       console.log("I love Mondays!");
       break;
      
   case 3:
      console.log("Happy Tuesday!");
      break;
      
   case 4:
      console.log("Working hard Wednesday!");
      break;
      
   case 5:
      console.log("It is Thursday, one more day!");
      break;
      
    case 6:
      console.log("TGIF, it's Friday!");
      break;
    
    case 7:
      console.log("Time to relax, it's Saturday!");
      break;
   
    default:
    console.error("invalid number");
     break;
}
