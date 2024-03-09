// https://teachablemachine.withgoogle.com/models/ZgWOYZlrH/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZgWOYZlrH/model.json", () => {
        classifier.classify(gotResults);
    });
}

dog_count = 0;
cat_count = 0;



function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;
        
        document.getElementById("result").innerHTML = "Detected " + results[0].label;
        if(results[0].label == "Bark"){
            document.getElementById("img").src = "bark.gif";
            dog_count++;
        }else if(results[0].label == "Meow"){
            document.getElementById("img").src = "meow.gif";
            dog_count++;
        }else{
            document.getElementById("img").src = "listen.gif";
        };
        document.getElementById("result_dog").innerHTML = "Detected a Dog "+dog_count+" times, and ";
        document.getElementById("result_cat").innerHTML = "detected a Cat "+cat_count+" times";

    };
};