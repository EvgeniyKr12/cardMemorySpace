export class Preloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Preloader'
        });
    }

    preload(): void {
        // this.load.setBaseURL('/assets/');
        // this.load.setPath("./assets/");

        this.load.image("volume-icon", "https://files.catbox.moe/u0kc8v.png");
        this.load.image("volume-icon_off", "https://files.catbox.moe/a8dx7m.png");

        this.load.audio("theme-song", "https://drive.google.com/drive/folders/1D_XUh5W8XQllZxuHYBq46GuRhRKhW_dj");
        this.load.audio("whoosh", "https://drive.google.com/drive/folders/1D_XUh5W8XQllZxuHYBq46GuRhRKhW_dj");
        this.load.audio("card-flip", "https://drive.google.com/drive/folders/1D_XUh5W8XQllZxuHYBq46GuRhRKhW_dj");
        this.load.audio("card-match", "https://drive.google.com/drive/folders/1D_XUh5W8XQllZxuHYBq46GuRhRKhW_dj");
        this.load.audio("card-mismatch", "https://drive.google.com/drive/folders/1D_XUh5W8XQllZxuHYBq46GuRhRKhW_dj");
        this.load.audio("card-slide", "https://drive.google.com/drive/folders/1D_XUh5W8XQllZxuHYBq46GuRhRKhW_dj");
        this.load.audio("victory", "https://drive.google.com/drive/folders/1D_XUh5W8XQllZxuHYBq46GuRhRKhW_dj");
        this.load.image("background", "assets/other/background.png");
        this.load.image("card-back", "assets/cards/card-back.png");
        this.load.image("card-0", "assets/cards/card-0.png");
        this.load.image("card-1", "assets/cards/card-1.png");
        this.load.image("card-2", "assets/cards/card-2.png");
        this.load.image("card-3", "assets/cards/card-3.png");
        this.load.image("card-4", "assets/cards/card-4.png");
        this.load.image("card-5", "assets/cards/card-5.png");
        this.load.image("heart", "assets/ui/heart.png");
    }


    // preload(): void {
    //     this.load.setBaseURL('/assets/');
    //     this.load.setPath("./assets/");

    //     this.load.image("volume-icon", "ui/volume-icon.png");
    //     this.load.image("volume-icon_off", "ui/volume-icon_off.png");

    //     this.load.audio("theme-song", "audio/fat-caps-audionatix.mp3");
    //     this.load.audio("whoosh", "audio/whoosh.mp3");
    //     this.load.audio("card-flip", "audio/card-flip.mp3");
    //     this.load.audio("card-match", "audio/card-match.mp3");
    //     this.load.audio("card-mismatch", "audio/card-mismatch.mp3");
    //     this.load.audio("card-slide", "audio/card-slide.mp3");
    //     this.load.audio("victory", "audio/victory.mp3");
    //     this.load.image("background", "assets/other/background.png");
    //     this.load.image("card-back", "assets/cards/card-back.png");
    //     this.load.image("card-0", "assets/cards/card-0.png");
    //     this.load.image("card-1", "assets/cards/card-1.png");
    //     this.load.image("card-2", "assets/cards/card-2.png");
    //     this.load.image("card-3", "assets/cards/card-3.png");
    //     this.load.image("card-4", "assets/cards/card-4.png");
    //     this.load.image("card-5", "assets/cards/card-5.png");
    //     this.load.image("heart", "assets/ui/heart.png");
    // }

    create(): void {
        this.scene.start("Play");
    }
}
