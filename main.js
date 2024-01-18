// Sample data for floors, rooms, and floor plans
const floors = ['1st Floor', '2nd Floor', '3rd Floor'];
const rooms = {
    '1st Floor': ['Room 101', 'Room 102', 'Room 103'],
    '2nd Floor': ['Room 201', 'Room 202', 'Room 203'],
    '3rd Floor': ['Room 301', 'Room 302', 'Room 303']
};
const floorPlans = {
    'Room 101': 'path/to/floorplan101.jpg',
    'Room 102': 'path/to/floorplan102.jpg',
    'Room 103': 'path/to/floorplan103.jpg',
    // Add more floor plans as needed
};

// Function to populate floor buttons
function populateFloorButtons() {
    const floorButtons = document.getElementById('floor-buttons');
    floors.forEach(floor => {
        const li = document.createElement('li');
        li.textContent = floor;
        li.addEventListener('click', () => populateRoomButtons(floor));
        floorButtons.appendChild(li);
    });
}

// Function to populate room buttons based on selected floor
function populateRoomButtons(floor) {
    const roomButtons = document.getElementById('room-buttons');
    roomButtons.innerHTML = ''; // Clear previous room buttons
    rooms[floor].forEach(room => {
        const li = document.createElement('li');
        li.textContent = room;
        li.addEventListener('click', () => displayFloorPlan(room));
        roomButtons.appendChild(li);
    });
}

// Function to display floor plan based on selected room
function displayFloorPlan(room) {
    const floorPlanImage = document.getElementById('floor-plan-image');
    floorPlanImage.src = floorPlans[room];
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateFloorButtons();
});
