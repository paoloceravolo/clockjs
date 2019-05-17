// Script parameters
const target = '#content';
const wrapper1 = 'article';
const wrapper2 = 'p';
const ajaxMethod = 'GET';
const ajaxUrl = 'https://www.dati.lombardia.it/resource/5bbn-8w23.json';

function callAjax(){
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            return xhr.response;
        }
    }
} 

xhr.open(ajaxMethod, ajaxUrl, true);
xhr.send();
};

function template(response){
    console.log(response);
    let targ = document.querySelector(target);
    let resp = JSON.parse(response);

    function appendResponse(item,index,arr){
        let newEle1 = document.createElement(wrapper1);
        let newEle2 = document.createElement(wrapper2);
        let textCont = document.createTextNode(item.categoria +" - "+ item.comune);
        targ.appendChild(newEle1).appendChild(newEle2).appendChild(textCont);
    }
    resp.forEach(appendResponse);
}






