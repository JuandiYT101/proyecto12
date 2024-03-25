Webcam.attach("#camara");

camara = document.getElementById("camara")

Webcam.set({
    width:350,
    height:300,
    image_forward: "png",
    png_quality: 90
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id  = "selfie_image" src "'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0RRV4QyKc/model.json',modelLoaded);

function modelLoaded(){
    console.log('Modelo cargado');
}