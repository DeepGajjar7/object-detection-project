var img="";
var model_status="";
var objects=[];

function preload(){
    img=loadImage("desk.png");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();

    objectdetector=ml5.objectDetector('cocossd',modeloaded)
    document.getElementById("status").innerHTML="status: detecting objects";
}

function draw(){
    image(img,0,0,640,420);
    if (model_status !=""){
        for (i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="Status: objects detected";
        fill("#FF0000");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15)
            noFill();
            stroke("#FF0000")
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            }
    }
}

function modeloaded(){
    console.log("model is loaded");
    model_status="true";
    objectdetector.detect(img,gotresults)
}

function gotresults(error,results){
    if(error){
        console.log(error)
    }

    else{
        console.log(results)
        objects=results;
    }
}













