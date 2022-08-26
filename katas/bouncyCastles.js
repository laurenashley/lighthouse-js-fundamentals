// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // 4/3 PI r cubed
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // 1/3 PI r squared times height
  return (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Set Base area 
  let B = depth * width;

  // V = Bh, or Volume equals Base times height
  return B * height;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let totalVolume = 0;

  for (let x = 0; x < solids.length; x++) {
    let solid = solids[x];
    let type = solid['type'];
    let radius = solid['radius'];
    let height = solid['height'] ? solid['height'] : '';
    let depth = solid['depth'] ? solid['depth'] : '';

    switch (type) {
      case 'sphere':
        totalVolume += sphereVolume(radius);
        break;
      case 'cone':
        totalVolume += coneVolume(radius, height);
        break;
      case 'prism':
        totalVolume += prismVolume(height, width, depth);
        break;
    }
  }

  return totalVolume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);