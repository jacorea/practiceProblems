const bouncingBall = (h, bounce, window) => {
     
    // Count and message variables 
    let message = "please go to a higher floor";
    let count = null;

    //only execute if bouncingBall criteria not met
    if(h < window) {
        return message;
    }
    
    //only excute bouncingBall method if parameters are met
    while(h >= window) { 
      count+= 1;
      h = h*bounce;
      if(h >= window) {
          count += 1;
      }
    } 
    return count;
}

console.log(bouncingBall(3,0.66,1.5));