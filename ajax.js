// Disable Same origin policy
//open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_sess_1" --disable-web-security

// Script parameters
const target = '#content';
const wrapper1 = 'article';
const wrapper2 = 'p';
const ajaxMethod = 'GET';
const ajaxUrl = 'https://www.dati.lombardia.it/resource/5bbn-8w23.json';

//The experimental pipeline operator |> (currently at stage 1) pipes the value of an expression into a function. This allows the creation of chained function calls in a readable manner. The result is syntactic sugar in which a function call with a single argument can be written like this:
//callAjax |> template;

// option 1 call the function that will proceed the pipe inside.
//callAjax();
// option 2 use calls to pipe: call the funtion a pass its output to a subsequent function.
// this does not match with the asynchronous pattern 
//template(callAjax());
// option 3 call the function and its callback. Callabck will execute when the asynchronous event is complete
callAjax(template);


function callAjax(callback){
//instanzo l'oggetto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  //debugger;

// comportamento dell'interprete
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4){
    if(xhr.status === 200){
      //option 1 call the function that will proceed the pipe inside.
      //template(xhr.response);
      // option 2 use calls to pipe: call the funtion a pass its output to a subsequent function.
      //return xhr.response;
      // option 3 call the function and its callback. Callabck will execute when the asynchronous event is complete
      callback(xhr.response);
    }
  }
}
//imposto la chiamata HTTP
xhr.open(ajaxMethod,ajaxUrl,true);

//invio la richiesta
xhr.send();
}

function template(response){

      //console.log(JSON.parse(response)[3].id);
      //console.log(target);

      let targ = document.querySelector(target);
      let resp = JSON.parse(response);

      //console.log(resp[3].id);
      //console.log(targ);

      function appendResponse(item,index,arr){
       // debugger;
        //targ.innerText += arr[index].id;
        //targ.innerText += item.id;
        let newEle1 = document.createElement(wrapper1);
        let newEle2 = document.createElement(wrapper2);
        let textCont = document.createTextNode(item.categoria +" - "+ item.comune);
        targ.appendChild(newEle1).appendChild(newEle2).appendChild(textCont);
        //console.log(index);
      }

      resp.forEach(appendResponse);
}