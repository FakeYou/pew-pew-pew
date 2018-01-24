import * as THREE from 'three';

import Camera from './Camera';

if (module.hot) {
	module.hot.dispose(() => {
		if (window.game) {
			window.game.dispose();
		}
	});

	module.hot.accept('./Camera', () => {
		window.game.camera = new Camera(window.game, window.game.renderer.domElement);
	});
}

export default class Game {
	constructor() {
		this.id = Date.now();
		this.scene = new THREE.Scene();

		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer.setSize(720, 480);
		this.renderer.setClearColor(0xeeeeee);

		this.camera = new Camera(this, this.renderer.domElement);

		this.box = new THREE.Mesh(
			new THREE.BoxGeometry(1, 2, 1),
			new THREE.MeshNormalMaterial()
		);

		this.scene.add(this.box);

		document.body.appendChild(this.renderer.domElement);

		this.update = this.update.bind(this);

		this.update();
	}

	dispose() {
		const canvas = document.querySelector('canvas');
		canvas && canvas.remove();

		this.renderer.forceContextLoss();
		cancelAnimationFrame(this.animationFrame);
	}

	update() {
		this.renderer.render(this.scene, this.camera);

		this.box.rotation.y += 0.03;

		this.animationFrame = requestAnimationFrame(this.update);
	}
}