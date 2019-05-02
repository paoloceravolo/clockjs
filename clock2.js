var t = {
    h: function(){
    var h = new Date().getHours();
    if (h == 12) {return 0;} 
    else if (h < 10) {return "0"+h;}
    else if (h >= 10){return h}
    },
    m: function(){
        var m = new Date().getMinutes();
        if (m < 10) {return "0"+m;}
        else if (m >= 10){return m}
    },
    s: function(){
        var s = new Date().getSeconds();
        if (s < 10) {return "0"+s;}
        else if (s >= 10){return s}
    },
    meridien: function(){
        if(this.h() < 12){return "AM"}
        else{return "PM"}
    },
    time: function(){
        return this.h()+":"+this.m()+":"+this.s()+" "+this.meridien()
    }
}

console.log(t.time());


function time(){
    
    //var currTime = t.h() + ":" + t.m() + ":" + t.s() + " " + t.meridien();
    //console.log(time);
    document.getElementById("myclock").innerText = t.time();
    //document.getElementById("myclock").textContent = time;
    
    setTimeout(time, 1000);
    
}

time();