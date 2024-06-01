nose_x = 0;
nose_y = 0;

function rhot() {
  console.log("Working");
}
function preload() {
  musta = loadImage(
    "https://i.postimg.cc/fypvbHpz/Moustache-Transparent-Free-PNG.png"
  );
  lip = loadImage("https://i.postimg.cc/7LB42YX7/lips-PNG6217.png");
}

function setup() {
  canvas = createCanvas(650, 450);
  canvas.position(350, 250);
  video = createCapture(VIDEO);
  video.hide();
  tint_color = "";

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("Posenet is initialised");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    console.log("nose x = " + nose_x);
    console.log("nose y = " + nose_y);
  }
}

function draw() {
  image(video, 0, 0, 650, 450);
  cursor("default");
  image(musta, nose_x - 50, nose_y - 25, 120, 50);
}
function TKshot() {
  save("good u");
}

function FTshot() {
  canvas.addEventListner("onclick", TKshot());
}
