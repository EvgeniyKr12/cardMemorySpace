import { Scene } from 'phaser';

interface CreateCardParams {
    scene: Scene;
    x: number;
    y: number;
    frontTexture: string;
    cardName: string;
}

interface Card {
    gameObject: Phaser.GameObjects.Plane;
    flip: (callbackComplete?: () => void) => void;
    destroy: () => void;
    cardName: string;
}

export const createCard = ({scene, x, y, frontTexture, cardName}: CreateCardParams): Card => {

    let isFlipping = false;
    const rotation = { y: 0 };

    const backTexture = "card-back";

    const card = scene.add.plane(x, y, backTexture)
        .setName(cardName)
        .setInteractive();

    // start with the card face down
    card.rotation = Phaser.Math.DegToRad(180); 

    const flipCard = (callbackComplete?: () => void): void => {
        if (isFlipping) {
            return;
        }
        scene.add.tween({
            targets: [rotation],
            y: (rotation.y === 180) ? 0 : 180,
            ease: Phaser.Math.Easing.Expo.Out,
            duration: 500,
            onStart: () => {
                isFlipping = true;
                scene.sound.play("card-flip");
                scene.tweens.chain({
                    targets: card,
                    ease: Phaser.Math.Easing.Expo.InOut,
                    tweens: [
                        {
                            duration: 200,
                            scale: 1.1,
                        },
                        {
                            duration: 300,
                            scale: 1
                        },
                    ]
                })
            },
            onUpdate: () => {
                card.rotation = Phaser.Math.DegToRad(180 + rotation.y); // Поворот на оси Y
                const cardRotation = Math.floor(Phaser.Math.RadToDeg(card.rotation)) % 360; // Преобразуем радианы в градусы
                if ((cardRotation >= 0 && cardRotation <= 90) || (cardRotation >= 270 && cardRotation <= 359)) {
                    card.setTexture(frontTexture);
                } else {
                    card.setTexture(backTexture);
                }
            },
            onComplete: () => {
                isFlipping = false;
                if (callbackComplete) {
                    callbackComplete();
                }
            }
        });
    }
    

    const destroy = (): void => {
        scene.add.tween({
            targets: [card],
            y: card.y - 1000,
            easing: Phaser.Math.Easing.Elastic.In,
            duration: 500,
            onComplete: () => {
                card.destroy();
            }
        });
    }

    return {
        gameObject: card,
        flip: flipCard,
        destroy,
        cardName
    };
};
