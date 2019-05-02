function Time(mod,sep,mer,){
    var date = new Date();
    this.h = function(){
    var h = date.getHours();
    if(h>=12){return h = h-(24-mod)}
    //if (h == 12) {return 0;} 
    else if (h < 10) {return "0"+h;}
    else if (h >= 10){return h}
    };
    this.m = function(){
    var m = date.getMinutes();
    if (m < 10) {return "0"+m;}
    else {return m}
    };
    this.s = function(){
    var s = date.getSeconds();
    if (s < 10) {return "0"+s;}
    else {return s}
    };
    this.sep = sep;
    this.meridien = function(){
        if (mer!=undefined){
            //console.log(mer);
            if (date.getHours()<12){return mer[0]}
            else{return mar[1]}
        }else{return ""}
    };
    this.time = this.h()+this.sep+this.m()+this.sep+this.s()+" "+this.meridien();
}


function time(){

    var arr = ["am","pm"];
    var t = new Time(12,".",arr);
    
    //var currTime = t.h() + ":" + t.m + ":" + t.s + " " + t.meridien;
    //console.log(time);
    document.getElementById("myclock").innerText = t.time;
    //document.getElementById("myclock").textContent = time;
    
    setTimeout(time, 1000);
    
}

time();