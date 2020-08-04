let pin_try_count = 3;
// Pin Generate Function
function generatePin(){
    document.getElementById("right").style.display = "none";
    document.getElementById("wrong").style.display = "none";
    let pin = Math.floor(Math.random() * 9000 + 1000); // 10000-1000=9000 to generate 4 digit pin
    return pin;
}
function showPin(){
    document.getElementById("showPin").value = generatePin();
}

// get number from number pad
function getInput(number){
    document.getElementById("displayNumber").value += number;
}

// Allclear display
function clearDisplay(){
    document.getElementById("displayNumber").value = '';
}

// clear with backspace in display
function backspaceClear(){
    let output = document.getElementById("displayNumber").value;
    if(output){ //if output has value
        output = output.substr(0,output.length - 1);
        document.getElementById("displayNumber").value = output;
    }
}

// match PIN
function pinMatcher(){            
    if(pin_try_count > 0){
        let pin = eval(document.getElementById("showPin").value);
        console.log(pin);
        let typed_int = eval(document.getElementById("displayNumber").value);
        console.log(typed_int);               
        if(pin === typed_int){
            document.getElementById("right").style.display = "block";
            document.getElementById("wrong").style.display = "none";
            pin_try_count = 3;
            document.getElementById("try-count").innerHTML = pin_try_count;
        }
        else{
            document.getElementById("right").style.display = "none";
            document.getElementById("wrong").style.display = "block";
            document.getElementById("try").style.display = "block";
            pin_try_count--;
            document.getElementById("try-count").innerHTML = pin_try_count;                    
        }  
    }
}