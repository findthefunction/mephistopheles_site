const flashcards = [
    {'你好': {'pinyin': 'nǐ hǎo', 'translation': 'Hello'}},
    {'谢谢': {'pinyin': 'xièxie', 'translation': 'Thank you'}},
    // Add more flashcards here
];

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let player;
let cursors;
let bullets;
let lastFired = 0;
let enemies;
let currentFlashcard;
let flashcardText;

function preload() {
    this.load.image('player', '/game2/path/to/spaceship.png');
    this.load.image('bullet', '/game2/path/to/bullet.png');
    this.load.image('enemy', '/game2/path/to/enemy.png');
}

function create() {
    player = this.physics.add.sprite(config.width / 2, config.height - 50, 'player');
    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();
    bullets = this.physics.add.group({
        defaultKey: 'bullet',
        maxSize: 10
    });

    enemies = this.physics.add.group();

    this.physics.add.overlap(bullets, enemies, hitEnemy, null, this);

    selectFlashcard();
    spawnEnemies();
}

function update(time, delta) {
    if (cursors.left.isDown) {
        player.setVelocityX(-300);
    } else if (cursors.right.isDown) {
        player.setVelocityX(300);
    } else {
        player.setVelocityX(0);
    }

    if (cursors.space.isDown && time > lastFired) {
        const bullet = bullets.get(player.x, player.y - 20);

        if (bullet) {
            bullet.setActive(true);
            bullet.setVisible(true);
            bullet.body.velocity.y = -500;
            lastFired = time + 100;
        }
    }

    bullets.children.each(function(b) {
        if (b.active && b.y < 0) {
            b.setActive(false);
            b.setVisible(false);
        }
    }, this);
}

function selectFlashcard() {
    currentFlashcard = flashcards[Math.floor(Math.random() * flashcards.length)];
    const key = Object.keys(currentFlashcard)[0];
    flashcardText = `${key} (${currentFlashcard[key].pinyin}): ${currentFlashcard[key].translation}`;
    document.getElementById('flashcard').innerText = flashcardText;
}

function spawnEnemies() {
    const key = Object.keys(currentFlashcard)[0];
    const sentenceChars = key.split('');

    sentenceChars.forEach(char => {
        const enemy = enemies.create(Math.random() * config.width, Math.random() * config.height / 2, 'enemy');
        enemy.setData('char', char);
        enemy.setVelocityY(50);
    });
}

function hitEnemy(bullet, enemy) {
    bullet.setActive(false);
    bullet.setVisible(false);
    enemy.destroy();

    const char = enemy.getData('char');
    if (flashcardText.includes(char)) {
        highlightFlashcardChar(char);
    }

    if (enemies.countActive(true) === 0) {
        selectFlashcard();
        spawnEnemies();
    }
}

function highlightFlashcardChar(char) {
    flashcardText = flashcardText.replace(char, `[${char}]`);
    document.getElementById('flashcard').innerText = flashcardText;
}
