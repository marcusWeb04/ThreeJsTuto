import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, iw/ih);


const geometry = new THREE.BoxGeometry(1 ,1 ,1);
// l'on précise la couleur du métériaux
const material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
const mesh = new THREE.Mesh (geometry,material);

// l'on crée une lumiére
const light = new THREE.PointLight(0xeeeeee);

scene.add(mesh);
// on ajoute la lumiére à la scene
scene.add(light);

camera.position.set(0,0,2);
// l'on gere la position de la lumiére
light.position.set(0,0,2);

const renderer = new THREE.WebGLRenderer({ canvas });


loop();

function loop(){
    requestAnimationFrame(loop);
    mesh.rotation.y += 0.02;
    mesh.rotation.x +=0.01;
    renderer.render(scene,camera);
}
