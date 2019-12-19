let key = true ;
function jsq(content){
    let input = document.getElementsByTagName('input')[0];
    if(content == '%'){
        input.value = Math.round(input.value) / 100;
    }else {
        if(key == true){
        input.value += content;
        }else{
            if(!isNaN(content))
            {
                key = true;
                input.value =  content ;  
            }
            else {
                key = true;
                input.value += content;
        }
    }  
}
}

function clearAll(){
    let input = document.getElementsByTagName('input')[0];
    input.value = '';
    input.focus();
}

function evalNum(){
    let input = document.getElementsByTagName('input')[0];
    let loadDiv = document.getElementsByTagName('div')[1];
    loadDiv.classList.add("loadEffect");
    loadDiv.style.display = 'inline-block';
    loadDiv.innerHTML='<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>'
    setTimeout(() => {
        loadDiv.setAttribute("class","loadStyle");
        loadDiv.style.display = 'none';
        input.value = eval(input.value);
        key = false;
    }, 1500);
}

function change(){
    let input = document.getElementsByTagName('input')[0];

    if(!isNaN(input.value)){
        if(Number(input.value) > 0){
            input.value = '-' + input.value;
        }else{
            input.value = input.value.substr(1);
        }
    }else{
    let newInputValue = input.value.split('').reverse().join("");
    let reg = /[+|-]/;
    let arr = newInputValue.match(reg);
    let  num =  arr.index  ;
    let newarr = newInputValue.split('');
    if(arr[0] == "+"){
        newarr.splice(num,1,"-");
    }else{
        newarr.splice(num,1,"+");
    }
    input.value  = newarr.reverse().join('');
}
}