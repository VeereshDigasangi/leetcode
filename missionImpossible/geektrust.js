const fs = require("fs"),
    readline = require("readline"),
    data = require("./data/vals.json");

let orbits = data.orbits;
let weather = data.weather;
let vehicles = data.vehicles;

/* 
@input1 Bike vehicle object
@input2 Tuktuk vehicle object
@input3 Car vehicle object
Return: Minimum tike taken vehicle name along with orbit
 */
function findMinTime(v1, v2, v3) {
    try {
        Object.assign(v1, v2, v3);
        let res = Object.keys(v1).sort(function (a, b) {
            return a - b;
        });
        return v1[res[0]];
    } catch (e) {
        console.error("findMinTIme failed", e)
    }
}

/* 
@input1 Name of wether
@input2 ORBIT1 trafice speed
@input3 ORBIT2 trafice speed
Return minimum time taken vehicle name along with orbit
*/
function fasterPath(in_weather, o1_t_s, o2_t_s) {

    try {
        if (!in_weather || !o1_t_s || !o2_t_s) {
            console.error("Invalid input data");
            return
        }
        in_weather = in_weather.toLowerCase()
        let carVals, tuktukvals, bikeVals;
        switch (in_weather) {
            case "rainy":
                carVals = calculateTime("car", vehicles.car, in_weather, o1_t_s, o2_t_s);
                tuktukvals = calculateTime("tuktuk", vehicles.tuktuk, in_weather, o1_t_s, o2_t_s);
                return findMinTime({}, tuktukvals, carVals);
            case "windy":
            case "sunny":
                bikeVals = calculateTime("bike", vehicles.bike, in_weather, o1_t_s, o2_t_s);
                carVals = calculateTime("car", vehicles.car, in_weather, o1_t_s, o2_t_s);
                tuktukvals = calculateTime("tuktuk", vehicles.tuktuk, in_weather, o1_t_s, o2_t_s);
                return findMinTime(bikeVals, tuktukvals, carVals);
            default:
                console.error("Invalid wether")
        }
    } catch (e) {
        console.log("Something went wrong ", e);

    }
}

/* 
@input1 Name of the vehicle
@input2 Vehicle related values
@input3 ORBIT1 trafice speed
@input4 ORBIT2 trafice speed
Return ORBIT1 and ORBIT2 travel time in mins
*/
function calculateTime(name, vehicle, in_wether, o1_t_s, o2_t_s) {
    try {
        vehicle_speed_o1 = (vehicle.speed > o1_t_s) ? o1_t_s : vehicle.speed;
        vehicle_speed_o2 = (vehicle.speed > o2_t_s) ? o1_t_s : vehicle.speed;
        let total_crates_on_o1 = orbits.o1.craters + (orbits.o1.craters * weather[in_wether] / 100);
        let total_crates_on_o2 = orbits.o2.craters + (orbits.o2.craters * weather[in_wether] / 100);

        let o1_time = ((orbits.o1.distance / vehicle_speed_o1 * 60) + (total_crates_on_o1 * vehicle.delay))
        let o2_time = ((orbits.o2.distance / vehicle_speed_o2 * 60) + (total_crates_on_o2 * vehicle.delay))
        return {
            [o1_time]: name.toUpperCase() + " ORBIT1",
            [o2_time]: name.toUpperCase() + " ORBIT2"
        }
    } catch (e) {
        console.error("calculateTime failed", e);
    }
}

/* 
Read input file from command line args
Return first line of the file
*/

async function readInput() {
    let pathToFile = process.argv.slice(2)[0]
    const readable = fs.createReadStream(pathToFile);
    const reader = readline.createInterface({
        input: readable
    });
    let line = await new Promise((resolve) => {
        reader.on('line', (line) => {
            reader.close();
            resolve(line);
        });
    });
    readable.on('error', (error) => {
        console.error("File doens not exist",error);
    });
    readable.close();
    line = line.split(/\b(\s)/).filter(function (e) {
        return e.trim().length > 0;
    });
    return line;
}

//Start execution
//Read file and print output
readInput().then(function (data) {
    let output = fasterPath(data[0], data[1], data[2])
    console.log(output);
}).catch(function (error) {
    console.error(error);
})