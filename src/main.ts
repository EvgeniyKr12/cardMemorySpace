import { Preloader } from './Preloader';
import { Play } from './Play';

const config = {
    title: 'Card Memory Game',
    type: Phaser.AUTO,
    backgroundColor: "#192a56",
    width: 549,
    height: 480,
    parent: "phaser-kr-eugene",
    render: {
        pixelArt: true,
        willReadFrequently: true,
    },
    scene: [
        Preloader,
        Play
    ]
};

new Phaser.Game(config);