import * as THREE from 'three';

export default class Camera extends THREE.PerspectiveCamera {
	constructor(game, element) {
		console.log(element.width, element.height);
		const aspect = element.width / element.height;

		super(60, aspect, 0.1, 100000);

		this.game = game;

		this.position.x = 3;
		this.position.y = 3;
		this.position.z = 3;

		this.lookAt(new THREE.Vector3(0, 0, 0));
	}
}