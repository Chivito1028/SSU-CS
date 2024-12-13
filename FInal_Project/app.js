
import * as THREE from './three.module.js';
import { GLTFLoader } from './GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const Tloader = new THREE.TextureLoader();
Tloader.load('./race-track-background-d4purv3qrgmzd3xq.jpg', function(texture){
  scene.background = texture;
});

scene.background = new THREE.Color(0x87CEEB);
const loader = new GLTFLoader();
loader.load('./mercedesf1.glb',function(glb){
  console.log(glb)
  const root = glb.scene;
  root.scale.set(0.7,0.7,0.7)
  root.position.y = -2;
  scene.add(root);

}, function (xhr){
  console.log((xhr.loaded/xhr.total * 100) + "% loaded")
}, function(error){
console.log('an error occured')
})

const light = new THREE.DirectionalLight(0xffffff,2)
light.position.set(2,2,5)
scene.add(light)

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement
 );
 

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
//  scene.add( cube );

camera.position.z = 45;
camera.position.x = 0;
camera.position.y = 0.0;


 function animate() {
  // cube.rotation.z += 0.01;
 	// cube.rotation.x += 0.01;
 	// cube.rotation.y += 0.01;

  camera.position.z -= 0.5;
 	renderer.render( scene, camera );
  if(camera.position < 44)
  {
    camera.position.z=45;
  }

 }
 animate();
