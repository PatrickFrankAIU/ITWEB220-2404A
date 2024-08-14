
let trafficLight = prompt("Please enter the color or status of the traffic lights");
let timeOfDay = prompt("Please enter time of day");

switch(trafficLight) {

    case "green":
       console.log("Go");
       break;
    case "yellow":
       console.log("Slow down");
       break;
    case "red":
        console.log("Stop");
        break;
    case "blinking":
        if (timeOfDay == "day"){
            console.log("Proceed with caution");
        break;
        }
        else if (timeOfDay == "night"){
            console.log("Stop, then proceed with caution");
        break;
        }
    case "none":
        if (timeOfDay == "day"){
            console.log("Stop then proceed when safe");
        }
        else if (timeOfDay == "night"){
            console.log("Use the light as a stop sign")
        break;
        }
    default:
        console.error("Invalid values");
}