let canvas = document.getElementById("board");
canvas.width = 400;
canvas.height = 400;

let c = canvas.getContext('2d');
c.translate(canvas.width/2, canvas.height/2);
c.save();

let turtle = new Turtle(c);

function draw(){
    let input = document.getElementById("input").value;
    instructions(input);
}

function instructions(input){
    let insts = input.split(" ");
    
    for (let i = 0; i < insts.length; ++i){
        switch (insts[i]){
            case "fd": turtle.forward(insts[++i]); break;
            case "bk": turtle.backward(insts[++i]); break;
            case "rt": turtle.rotateRight(insts[++i]); break;
            case "lt": turtle.rotateLeft(insts[++i]); break;
            case "pu": turtle.penUP(); break;
            case "pd": turtle.penDown(); break;
            case "ct": turtle.centerTurtle(); break;
            case "cs": turtle.clearScreen(); break;
            case "repeat": 
                let sub = getSubString(input);
                let skip;
                let len = insts[++i];
                for (let x = 0; x < len; ++x){
                    skip = instructions(sub); 
                }
                i += skip;
                break;
            default: console.log(`command #${i+1} not recognized.`);
        }
    }

    return insts.length;
}

function getSubString(input){
    //find the start of the repeat loop
    let start = input.indexOf("[");
    let end = start;
    //counter becomes 0 when you find the ] that closes the first [
    let counter = 1;
    while (counter > 0 && end < input.length){
        //increment end and check what it is
        if (input[++end] == "[")
            ++counter;
        else if (input[end] == "]")
            --counter;
    }

    //end is now the index of the correct ]
    let steps = end - start;
    return input.substr(start+1, steps-1);
}

document.getElementById("input").addEventListener("keydown", (e) => {
    if (e.code == "Enter"){
        draw();
    }
})