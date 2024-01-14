

let convertTemperature = (temperature, unit) => {
    let conversionFactor = unit === "C" ? 9 / 5 : 5 / 9;
    let offset = unit === "C" ? 32 : 0;
    return temperature * conversionFactor + offset;
  };
  
  
  let temperature = 30;
let unit = "C";

let convertedTemperature = convertTemperature(temperature, unit);

console.log(convertedTemperature);

