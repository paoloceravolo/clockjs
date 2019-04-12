var t = {
    h: function(){
        var h = new Date().getHours();
        if (h==12){return 0}
        else if (h<10){return "0"+h}
        else if (h>=10){return h}
    },
    m: function(){
        var m = new Date().getMinutes();
        if (m<10){return "0"+m}
        else {return m}
    },
    s:  function(){
        var s = new Date().getSeconds();
        if (s<10){return "0"+s}
        else {return s}
    },
    mer: function(){
        if(this.h()<12){return "AM"}
            else{return "PM"}
    },
    time: function(){
        return this.h()+":"+this.m()+":"+this.s()+" "+this.mer()
    }
}

function time(){

    document.getElementById("myclock").innerText = t.time();

    
    setTimeout(time, 1000);
    
}

time();