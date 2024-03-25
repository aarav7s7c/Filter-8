function setup() {
  canvas = createCanvas(650, 450);
  canvas.position(350, 250);
  video = createCapture(VIDEO);
  video.hide();
  tint_color = "";
}

function draw() {
  image(video, 0, 0, 650, 450);
}

function TKshot() {
  save("good u");
}

function FTshot() {
  tint_color = document.getElementById("Tcolor").value;
  canvas.addEventListner("onclick", TKshot());
}
