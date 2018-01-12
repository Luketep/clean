import GAME_CONFIG from './gameConfig';

import boot from './states/boot';
import load from './states/load';
import main from './states/main';

export default class Game {
    constructor() {
        const game = new Phaser.Game(
            GAME_CONFIG.DIMENSIONS.WIDTH,
            GAME_CONFIG.DIMENSIONS.HEIGHT,
            Phaser.AUTO,
            ''
        );

		game.state.add('boot', boot);
		game.state.add('load', load);
		game.state.add('main', main);

		game.state.start('boot');
    }
}