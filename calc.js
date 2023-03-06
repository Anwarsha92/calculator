

function displayNum(num){
    result.value=result.value+num
}

function evaluateExpr(){
    result.value=eval(result.value)  //eval(for result)
}

function percent(){
    result.value=result.value/100
}

function allClear(){
    result.value=''
}

function backSpace(){
    result.value=result.value.slice(0,-1)
}
