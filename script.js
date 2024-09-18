// Set up the scene, camera, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

// Set the renderer size to fill the window
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a five-sided polygon (pentagon)
var geometry = new THREE.Geometry();
geometry.vertices.push(
    new THREE.Vector3(1, 0, 0),   // Vertex 1
    new THREE.Vector3(0.31, 0.95, 0), // Vertex 2
    new THREE.Vector3(-0.81, 0.59, 0), // Vertex 3
    new THREE.Vector3(-0.81, -0.59, 0), // Vertex 4
    new THREE.Vector3(0.31, -0.95, 0)  // Vertex 5
);

// Define the face (polygon surface) using the vertices
geometry.faces.push(new THREE.Face3(0, 1, 2));  // First triangle of the pentagon
geometry.faces.push(new THREE.Face3(0, 2, 3));  // Second triangle of the pentagon
geometry.faces.push(new THREE.Face3(0, 3, 4));  // Third triangle of the pentagon

// Create the material with a red or blue surface
var material = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide }); // Red surface
// var material = new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.DoubleSide }); // Uncomment for Blue surface

// Create the mesh by combining geometry and material
var polygon = new THREE.Mesh(geometry, material);
scene.add(polygon);

// Position the camera
camera.position.z = 2;

// Add rotation to the polygon
function animate() {
    requestAnimationFrame(animate);

    // Rotate the polygon on its x- and y-axis
    polygon.rotation.x += 0.01;
    polygon.rotation.y += 0.01;

    // Render the scene from the perspective of the camera
    renderer.render(scene, camera);
}

// Start the animation loop
animate();
