import * as PopXR from '@popcity/xr'

// const THREE = PopXR.three;




// const scene = new THREE.Scene();
// // const camera = new THREE.PerspectiveCamera();
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
// const camera = new THREE.PerspectiveCamera(80, 2, 0.1, 50000);
// camera.position.set( 0, 100, 0);
// camera.lookAt( 0, 0, 0 );
// const control = new PopXR.Controls(camera);
// const geometry = new THREE.PlaneGeometry( 100, 100 );
// const geometry1 = new THREE.PlaneGeometry(100,100)
// const texture = new THREE.TextureLoader().load('./navagator2.png');
// texture.wrapT = THREE.RepeatWrapping;
// texture.wrapS = THREE.RepeatWrapping;
// const material = new THREE.MeshBasicMaterial( { color: 0xfffffff,side:2,map: texture,transparent:true} );
// const plane2 = new THREE.Mesh(geometry1, material);
// const plane = new THREE.Mesh( geometry, material );
// const size = 100;
// const divisions = 100;

// const gridHelper = new THREE.GridHelper( size, divisions );
// plane.position.x = 100
// plane.position.y = 0
// plane.position.z = 10
// plane2.position.z = -60
// plane2.position.y = 15

// scene.add( plane );
// // scene.add( plane2)
// scene.add(camera)
// scene.add(gridHelper);
// const cam = new PopXR.WebcamRenderer(renderer);

// function render() {
//     resizeUpdate();
//     cam.update();
//     // control.update();
//     renderer.render(scene, camera);
//     requestAnimationFrame(render);
// }

// function resizeUpdate() {
//     const canvas = renderer.domElement;
//     const width = canvas.clientWidth, height = canvas.clientHeight;
//     if(width != canvas.width || height != canvas.height) {
//         renderer.setSize(width, height, false);
//     }
//     camera.aspect = canvas.clientWidth / canvas.clientHeight;
//     camera.updateProjectionMatrix();
// }



// requestAnimationFrame(render);

import Vconsole from 'vconsole'
// @ts-ignore
import * as THREE from 'three';
// @ts-ignore
const vConsole = new Vconsole()
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 20, 0 );
camera.lookAt( 0, 0, 0 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let control = new PopXR.DeviceOrientationControls(camera)
control.connect()
 const geometry = new THREE.PlaneGeometry( 5, 5 );
const geometry1 = new THREE.PlaneGeometry(10,10)
 const texture = new THREE.TextureLoader().load('./navagator3.png');
 texture.wrapT = THREE.RepeatWrapping;
texture.wrapS = THREE.RepeatWrapping;
 const material = new THREE.MeshBasicMaterial( { color: 0xfffffff,side:2,map: texture,transparent:true} );
new THREE.Mesh(geometry1, material);
const plane = new THREE.Mesh( geometry, material );
const size = 100;
const divisions = 100;

const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( plane );
scene.add( gridHelper );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	control.update();
	renderer.render( scene, camera );
}

animate();
















