//comece a programar aqui
noseX=0;
noseY=0;
function preload() {
clownNose=loadImage('https://i.postimg.cc/XJB40tWn/nariz-de-palha-o.webp')
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)

}

function modelLoaded(){
    console.log('poseNet is Initialized');
}
function gotPoses(results){
    if(results.length >0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
    }
}
function draw(){
image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
circle(noseX, noseY,20);
}
function takeSnapshot(){
    save('myFilterImage.png');
}
