const planetDetails = {
   Sun:{
    name: "Sun",
    type: "Star",
    nickname: "The Golden Sphere",
    radius: 696340, // in km
    mass: 1.989e30, // in kg
    distanceFromEarth: 149.6, // in million km (average distance)
    atmosphere: "Hydrogen, helium",
    fact: "The Sun accounts for 99.86% of the Solar System's total mass.",
    image: "img/sun.png"
  },
   Mercury:{
    name: "Mercury",
    type: "Planet",
    nickname: "The Swift Planet",
    radius: 2439.7, // in km
    mass: 3.3011e23, // in kg
    distanceFromSun: 57.91, // in million km
    atmosphere: "Thin exosphere",
    fact: "Mercury is the fastest planet, zipping around the Sun every 88 days.",
    image: "img/mercury.png"
  },
  Venus:{
    name: "Venus",
    type: "Planet",
    nickname: "Earth’s Twin",
    radius: 6051.8, // in km
    mass: 4.8675e24, // in kg
    distanceFromSun: 108.2, // in million km
    atmosphere: "Carbon dioxide and nitrogen",
    fact: "Venus is the hottest planet in the Solar System, with surface temperatures over 450°C (842°F).",
    image: "img/venus.png"
  },
  Earth:{
    name: "Earth",
    type: "Planet",
    nickname: "The Blue Planet",
    radius: 6371, // in km
    mass: 5.97237e24, // in kg
    distanceFromSun: 149.6, // in million km
    atmosphere: "Nitrogen, oxygen, and others",
    fact: "Earth is the only planet known to support life.",
    image: "img/earth.png"
  },
  Mars:{
    name: "Mars",
    type: "Planet",
    nickname: "The Red Planet",
    radius: 3389.5, // in km
    mass: 6.4171e23, // in kg
    distanceFromSun: 227.9, // in million km
    atmosphere: "Carbon dioxide, argon, nitrogen",
    fact: "Mars has the tallest volcano in the Solar System, Olympus Mons, which is three times the height of Mount Everest.",
    image: "img/mars.png"
  },
  Jupiter:{
    name: "Jupiter",
    type: "Planet",
    nickname: "The Gas Giant",
    radius: 69911, // in km
    mass: 1.8982e27, // in kg
    distanceFromSun: 778.5, // in million km
    atmosphere: "Hydrogen and helium",
    fact: "Jupiter's Great Red Spot is a storm larger than Earth that has been raging for centuries.",
    image: "img/jupiter.png"
  },
  Saturn:{
    name: "Saturn",
    type: "Planet",
    nickname: "The Ringed Planet",
    radius: 58232, // in km
    mass: 5.6834e26, // in kg
    distanceFromSun: 1434, // in million km
    atmosphere: "Hydrogen and helium",
    fact: "Saturn has the most extensive ring system, made up of ice and rock particles.",
    image: "img/saturn.png"
  },
  Uranus:{
    name: "Uranus",
    type: "Planet",
    nickname: "The Ice Giant",
    radius: 25362, // in km
    mass: 8.6810e25, // in kg
    distanceFromSun: 2871, // in million km
    atmosphere: "Hydrogen, helium, and methane",
    fact: "Uranus rotates on its side, making its axis almost horizontal.",
    image: "img/uranus.svg"
  },
  Neptune:{
    name: "Neptune",
    type: "Planet",
    nickname: "The Windy Planet",
    radius: 24622, // in km
    mass: 1.02413e26, // in kg
    distanceFromSun: 4495, // in million km
    atmosphere: "Hydrogen, helium, and methane",
    fact: "Neptune has the fastest winds in the Solar System, reaching speeds of 2,100 km/h (1,300 mph).",
    image: "img/neptune.png"
  }
};


function showPlanetInfo(planet) {
  const planetInfo = planetDetails[planet];
  const modalContent = document.getElementById("planet-info");
  modalContent.innerHTML = `
    <div><img src="${planetInfo.image}" alt="${planetInfo.name}" /></div>
    <div>
    <h2>${planetInfo.name}</h2>
    <p><strong>Nickname:</strong> ${planetInfo.nickname}</p>
    <p><strong>Type:</strong> ${planetInfo.type}</p>
    <p><strong>Radius:</strong> ${planetInfo.radius} KM</p>
    <p><strong>Mass:</strong> ${planetInfo.mass} KG</p>
    <p><strong>Distance From Sun:</strong> ${planetInfo.distanceFromSun} MILLION KM</p>
    <p><strong>Atmosphere:</strong> ${planetInfo.atmosphere}</p>
    <p><strong>Fact:</strong> ${planetInfo.fact}</p>
    </div>
    `;
  
}

function closeModal() {
  const modalContent = document.getElementById("planet-info");
  modalContent.innerHTML = `
    <h2>Select a Planet</h2>
    <p>Click on a planet to learn more about it!</p>
  `;
}





// DOM Elements
const searchBar = document.getElementById('search-bar');
const constellationList = document.getElementById('constellation-list');

// Folder containing images
const imageFolder = 'stars/';

// Array of image file names
const imageFiles =[
  'andromeda.jpg',
  'antlia.jpg',
  'apus.jpg',
  'aquarius.jpg',
  'aquila.jpg',
  'ara.jpg',
  'aries.jpg',
  'auriga.jpg',
  'bootes.jpg',
  'caelum.jpg',
  'camelopardalis.jpg',
  'cancer.jpg',
  'canes venatici.jpg',
  'canis major.jpg',
  'canis minor.jpg',
  'capricornus.jpg',
  'carina.jpg',
  'cassiopeia.jpg',
  'centaurus.jpg',
  'cepheus.jpg',
  'cetus.jpg',
  'chamaeleon.jpg',
  'circinus.jpg',
  'columba.jpg',
  'coma berenices.jpg',
  'corona australis.jpg',
  'corona borealis.jpg',
  'corvus.jpg',
  'crater.jpg',
  'crux.jpg',
  'cygnus.jpg',
  'delphinus.jpg',
  'dorado.jpg',
  'draco.jpg',
  'equuleus.jpg',
  'eridanus.jpg',
  'fornax.jpg',
  'gemini.jpg',
  'grus.jpg',
  'hercules.jpg',
  'horologium.jpg',
  'hydra.jpg',
  'hydrus.jpg',
  'indus.jpg',
  'lacerta.jpg',
  'leo.jpg',
  'leo minor.jpg',
  'lepus.jpg',
  'libra.jpg',
  'lupus.jpg',
  'lynx.jpg',
  'lyra.jpg',
  'mensa.jpg',
  'microscopium.jpg',
  'monoceros.jpg',
  'musca.jpg',
  'norma.jpg',
  'octans.jpg',
  'ophiuchus.jpg',
  'orion.jpg',
  'pavo.jpg',
  'pegasus.jpg',
  'perseus.jpg',
  'phoenix.jpg',
  'pictor.jpg',
  'pisces.jpg',
  'piscis austrinus.jpg',
  'puppis.jpg',
  'pyxis.jpg',
  'reticulum.jpg',
  'sagitta.jpg',
  'sagittarius.jpg',
  'scorpius.jpg',
  'sculptor.jpg',
  'scutum.jpg',
  'serpens.jpg',
  'sextans.jpg',
  'taurus.jpg',
  'telescopium.jpg',
  'triangulum.jpg',
  'triangulum australe.jpg',
  'tucana.jpg',
  'ursa major.jpg',
  'ursa minor.jpg',
  'vela.jpg',
  'virgo.jpg',
  'volans.jpg',
  'vulpecula.jpg'
];


// Function to display images and their names
async function displayConstellations() {
  constellationList.innerHTML = '';

  // Iterate over each image file and generate the HTML for it
  imageFiles.forEach(imageFile => {
      // Extract the constellation name from the file name
      const name = imageFile.replace('.jpg', '').replace(/_/g, ' ').toUpperCase();

      // Append the image and name to the `constellationList` element
      constellationList.innerHTML += `
          <div style="text-align: center; ">
              <img src='${imageFolder}${imageFile}' alt='${name}' " />
              <h2 style="text-align: center;">${name}</h2>
          </div>
      `;
    });
}

// Filter images based on search input
searchBar.addEventListener('input', () => {
    const filter = searchBar.value.toLowerCase();
    const items = constellationList.getElementsByTagName('div');

    Array.from(items).forEach(item => {
        const name = item.textContent.toLowerCase();
        item.style.display = name.includes(filter) ? '' : 'none';
    });
});

// Initialize display on page load
displayConstellations();
