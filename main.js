status = "";

function setup()
{
    canvas = createCanvas(500,400);
    canvas.center();
    canvas.position(700,340);
    video = createCapture(VIDEO);
    video.hide();
    video.size(500,400);
}


function modelLoaded() 
{
    console.log("Model Loaded!");
    status = true;
}


function start() 
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("object_name").value;
}

function draw()
{
    image(video,0,0,500,400)
}

function gotResult(error,results)
{
     if(error)
     {
        console.error(error);
     }
     else
     {
          console.log(results);
     }
}

