
let map;
let marker;

function initMap() {
  // Set initial coordinates (default: somewhere central)
  const initialCoords = { lat: 20.5937, lng: 78.9629 };
  
  // Create a new map instance
  map = new google.maps.Map(document.getElementById('map'), {
    center: initialCoords,
    zoom: 4
  });

  // Create a marker on the map
  marker = new google.maps.Marker({
    position: initialCoords,
    map: map
  });
}

// Function to update the map and marker
function updateMap(lat, lng) {
  const coords = { lat: parseFloat(lat), lng: parseFloat(lng) };
  
  // Update map center and marker position
  map.setCenter(coords);
  map.setZoom(8);
  marker.setPosition(coords);
}

// Event listener for the "Search Location" button
document.getElementById('searchBtn').addEventListener('click', () => {
  const lat = document.getElementById('latitude').value;
  const lng = document.getElementById('longitude').value;
  
  if (lat && lng) {
    updateMap(lat, lng);
  } else {
    alert("Please enter both latitude and longitude.");
  }
});

// Load the map
window.onload = initMap;
