function Time(mod,sep,mer){
    var date = new Date();
    this.h = function(){
    var h = date.getHours();
    if(h>=12){h = h -(24-mod)
        if (h <10){return "0"+h}
        else {return h}
    }else{
        if (h <10){return "0"+h}
        else {return h}
    }
    };
    this.m = function(){
    var m = date.getMinutes();
    if(m<10){return "0"+m}
        else{return m}
    };
    this.s = function(){
    var s = date.getSeconds();
    if(s<10){return "0"+s}
        else{return s}
    };
    this.sep = sep;
    this.mer = function(){
        if (mer!=undefined){
        if (date.getHours() < 12){return mer[0]}
            else {return mer[1]}
        }else{return ""}
    }
    this.time = this.h()+this.sep+this.m()+this.sep+this.s()+this.mer();
}

function time(){

    var mer = ["mattino","pomeriggio"];
    var t = new Time(12,".",mer); 

    document.getElementById("myclock").innerText = t.time;

    
    setTimeout(time, 1000);
    
}

time();