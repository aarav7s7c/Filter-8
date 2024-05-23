function setup() {
  canvas = createCanvas(650, 450);
  canvas.position(350, 250);
  video = createCapture(VIDEO);
  video.hide();
  tint_color = "";

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses)
}

function modelLoaded() {
  console.log("Posenet is initialised")
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results)
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
  }
}

function draw() {
  image(video, 0, 0, 650, 450);
   cursor("default");
}

function TKshot() {
  save("good u");
}

function FTshot() {
  canvas.addEventListner("onclick", TKshot());
}
