
let lang ='en-US';
let speechRec = new p5.SpeechRec(lang);

speechRec.continuous = true; // do continuous recognition
speechRec.interimResults = false

let word = [];
let value;
let count;
let x, y;

function setup(){
    createCanvas(500,500);
    background(20, 51, 100);
    speechRec.onResult = gotSpeech
    speechRec.start();
    
    function gotSpeech(){
       if(speechRec.resultValue){
//           createP(speechRec.resultString);
        value=speechRec.resultString;
        append(word, value)           
//        append(word, splitTokens(value,' '))
        
//        print(word)
           
//        for (let i = 0; i<word.length; i++){
//            print(word[i]);
//        }
           
        var search = 'like';
        for (var i = 0; i<word.length; i++){
            var splitwords = split(word[i], ' ')
        }
        splitwords.sort();
        var cnt = 0;
        var current = null;
           
        for (let i = 0; i<splitwords.length; i++){
            if(splitwords[i] != current){
                if (cnt > 0) {
                    createP(current + ': ' + cnt + ' times<br>');
                }
                current = splitwords[i];
                cnt = 1;
            }
            else {
                cnt++;
            }
        }
        if (cnt > 0) {
        createP(current + ': '+cnt + ' times');
            
        x = random(40)
        print(x)
        y = random(50)
        print(y)
    }

//
        print(splitwords)
        count = splitwords.reduce(function(n, val) {
            return n + (val === search);
        }, 0);
        console.log(count);
       }
    }
}

function draw(){
    background(20, 51, 100);
    ellipse(x*30, y*50, count*10, count*10)
    
}