const level1 = new Level(
  [
    new Background(
      "../assets/img/3. Background/Light/1.png",
      0,
    ),
    new Background(
      "../assets/img/3. Background/Light/2.png",
      720,
    ),
  ],
  [
    new Enemy(250, 100, 35, 27),
    new Enemy(200, 100, 35, 27),
    new EndBoss(500, 0, 80, 100),
  ],
);
