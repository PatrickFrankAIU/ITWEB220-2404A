function adviseDriver(trafficLight, timeOfDay) {
    switch (trafficLight) {      
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
            switch (timeOfDay) {
                case "day":
                    console.log("Proceed with caution");
                    break;
                case "night":
                    console.log("Stop, then proceed with caution");
                    break;
                default:
                    console.log("Invalid time of day");
            }
            break;
        case "none":
            switch (timeOfDay) {
                case "day":
                    console.log("Stop, then proceed when safe");
                    break;
                case "night":
                    console.log("Use the light as a stop sign");
                    break;
                default:
                    console.log("Invalid time of day");
            }
            break;
        default:
            console.log("Invalid traffic light status");
    }
}

// Example usage:
let trafficLight = "blinking"; // possible values: "red", "green", "yellow", "blinking", "none"
let timeOfDay = "night"; // possible values: "day", "night"

adviseDriver(trafficLight, timeOfDay);