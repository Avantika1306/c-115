function preload(){

}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(300 , 300);
posenet=ml5.poseNet(video , modelLoaded);
posenet.on('pose',gotResults);
}

function gotResults(results){
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x );
    console.log("nose y = " + results[0].pose.nose.y );
}


function modelLoaded(){
    console.log("pose net is initialized");
}

function draw(){
image(video,0 , 0 ,300,300);
}
function takeSnapshot(){
    save("myselfie.png");
}