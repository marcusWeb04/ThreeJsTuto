import * as THREE from 'three';

// on créer une classe
const scene = new THREE.Scene();

// // on créer une camera
const camera = new THREE.PerspectiveCamera(70, iw/ih);

// l'on créer une geometrie
const geometry = new THREE.BoxGeometry(1 ,1 ,1);

// l'on précise la couleur du métériaux
const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );

// l'on créer un mesh et on l'instantie (mesh= fomrme géométique 3d + couleur du matériaux)
const mesh = new THREE.Mesh (geometry,material);

// on ajoute l'instance à la scene(on peut instantier autant de mesh que l'on veut)
scene.add(mesh);

// on positione la camera
// postion(x,y,z)
camera.position.set(0,0,2);

// on créer notre rendu
const renderer = new THREE.WebGLRenderer({ canvas });


// on affiche notre rendu
renderer.render(scene,camera);