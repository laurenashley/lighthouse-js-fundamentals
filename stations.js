const chooseStations = function (stations) {
  // build list of stations that are schools or community centres and have capacity of 20 or more
  let stationsList = [];

  // iterate through stations array, check if station matches conditions
  for (const station of stations) {
    if (station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')) {
        stationsList.push(station[0]);
    }
  }

  return stationsList;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));