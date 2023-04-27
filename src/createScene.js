import * as THREE from 'three';
let camera, scene, renderer;
let plane;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 400;

    scene = new THREE.Scene();


    // const geometry = new THREE.PlaneGeometry( 100, 100 );
    // const texture = new THREE.TextureLoader().load('./navagator.jpg');
    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    // console.log(texture)
    // const material = new THREE.MeshStandardMaterial({
    //     color:0xffff00,
    // })
    
    // plane = new THREE.Mesh(geometry, material)

    const geometry = new THREE.PlaneGeometry( 100, 100 );
    const geometry1 = new THREE.PlaneGeometry(100,100)
    const texture = new THREE.TextureLoader().load('./navagator2.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    const material = new THREE.MeshBasicMaterial( { color: 0xfffffff,side:2,map: texture,transparent:true} );
    const plane2 = new THREE.Mesh(geometry1, material);
    plane = new THREE.Mesh( geometry, material );
    plane.position.x = 120
    plane.position.y = 150
    plane.position.z = -600
    plane2.position.z = -600
    plane2.position.y = 150
    console.log(plane)
    scene.add( plane );
    scene.add( plane2)

    renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true   } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    //

    window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

    requestAnimationFrame( animate );
    renderer.render( scene, camera );

}