rightWristY=0;
song = "";
function preload(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){console.log("model is working noicely" )}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rightWristY=results[0].pose.rightWrist.y;
        console.log("right wrist Y is"+ rightWristY);
        if(rightWristY<200){
            song.play();
            song.setVolume(1);
            song.rate(1);
        }
        if(rightWristY>500){
            song.stop();
        }
    }
    }
    function draw() {
    image(video, 0, 0, 600, 500);
}
function dark_mode(){
    document.body.style.backgroundImage = "url('https://research.fb.com/wp-content/uploads/2018/05/music-hero2.jpg?w=960&h=560&crop=1   ')";
}