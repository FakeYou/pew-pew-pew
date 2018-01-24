import * as THREE from 'three';
import Game from './Game';

if (module.hot) {
	module.hot.accept('./Game', () => {
		console.log('reload game', Game.iets, 'hoi');
		window.game = new Game();
	});
}

window.game = new Game();
window.THREE = THREE;
