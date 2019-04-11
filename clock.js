function time(){

var date = new Date();
var h = date.getHours(); // 0 - 23
var m = date.getMinutes(); // 0 - 59
var s = date.getSeconds(); // 0 - 59
var meridiem = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        meridiem = "PM";
    }
    
    // The conditional ternary operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var currTime = h + ":" + m + ":" + s + " " + meridiem;
    //console.log(time);
    document.getElementById("myclock").innerText = currTime ;
    //document.getElementById("myclock").textContent = time;
    
    setTimeout(time, 1000);
    
}

time();