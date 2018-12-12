let lang = 'en-US';
let speechRec = new p5.SpeechRec(lang);

speechRec.continuous = true; // do continuous recognition
speechRec.interimResults = false

let word = "";
let value = []
let res;
let result_word = [1];
let result_count = [1];
let json = {}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0, 255, 255);
    speechRec.onResult = gotSpeech
    speechRec.start();

    function gotSpeech() {
        if (speechRec.resultValue == true) {      
            value = speechRec.resultString;
        }
        word += value + ' '
        res = splitTokens(word, " ");

        function finder(res) {
            var name = [],
                val = [],
                prev;
            res.sort();
            for (var i = 0; i < res.length; i++) {
                if (res[i] !== prev) {
                    name.push(res[i]);
                    val.push(1);
                } else {
                    val[val.length - 1]++;
                }
                prev = res[i];
            }
            return [name, val];
        }
        

        result = finder(res);
        result_word = result[0]
        result_count = result[1]

    }

    //set up my circles object

}
//console.log(result)

//
function draw() {

    background(255, 255, 255);

    for (var i = 0; i < result_count.length; i++) {
        frameRate(0.5)
        fill(118, 144, 113, 100);
        noStroke();
        ellipse(random(width), random(height), result_count[i] * 20, result_count[i] * 20);
        fill(0,0,0)
        textSize(result_count[i] * 10);
        text(result_word[i], random(width),random(height));
    }
    
//    pieChart(150, result_count);

}

function pieChart(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    var color = map(i, 0, data.length, 0, 255);
    fill(color);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(result_count[i]));
    lastAngle += radians(result_count[i]);
  }
}
