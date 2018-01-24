// import * as THREE from 'three';
// import Game from './Game';

// if (module.hot) {
// 	module.hot.accept('./Game', () => {
// 		console.log('reload game', Game.iets, 'hoi');
// 	});
// }

// console.log('start game', Game.iets, 'hoi');

if (module.hot) {
	module.hot.accept('./test', () => {
		hoi();
	});
}

const hoi = require('./test').default;

hoi();
