
let currentDay = +prompt("Please enter a number 1 to 7:");
let daysLeft = 6;

switch(currentDay) {
    case 1:
       console.log("oh No it is Sunday, back to work tomorrow!");
       --daysLeft
       console.log("There are only " + daysLeft + " days to go to the weekend");
       break;
 
    case 2:
       console.log("I love Mondays!");
       let left2 = (daysLeft - 2);
       console.log("There are only " + left2 + " days to go to the weekend")

       break;
      
   case 3:
      console.log("Happy Tuesday!");
      let left3 = (daysLeft - 3);
       console.log("There are only " + left3 + " days to go to the weekend")
      break;
      
   case 4:
      console.log("Working hard Wednesday!");
      let left4 = (daysLeft - 4);
       console.log("There are only " + left4 + " days to go to the weekend")
      break;
      
   case 5:
      console.log("It is Thursday, one more day!");
      let left5 = (daysLeft - 5);
       console.log("There are only " + left5 + " days to go to the weekend")
      break;
      
    case 6:
      console.log("TGIF, it's Friday!");
      let left6 = (daysLeft - 6);
       console.log("There are only " + left6 + " days to go to the weekend")
      break;
    
    case 7:
      console.log("Time to relax, it's Saturday!");
      break;
   
    default:
    console.error("invalid number");
     break;
}
