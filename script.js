function calculate(){
    let isLeapYear = document.querySelector(".year").value;
        
        isLeapYear = Number(isLeapYear);

    let answer = document.getElementById("answer");

    if(isLeapYear === 0){
        answer.innerHTML = "please enter a year";
        return;
    }

    
    if(isLeapYear % 4 === 0){
        if(isLeapYear % 100 === 0){
            if(isLeapYear % 400 === 0){
                answer.innerHTML = "a Leap Year";
            }else{
                answer.innerHTML = "not a Leap Year"
            }

        }else{
            answer.innerHTML = "a Leap Year";
        }

    }else{
        answer.innerHTML = "not a Leap Year";
    }
    
}

