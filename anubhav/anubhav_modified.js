const up = function(array){
    array = array.sort(function(a, b){
        return a-b;
    })
    return array;
};

const down = function(array){
    array = array.sort(function(a, b){
        return b-a
    })
    return array
}

const max = function(array){
    let max = array.reduce(function(a, b) {
        return Math.max(a, b)
    })
    return max
}

const min = function(array){
    let min = array.reduce(function(a, b) {
        return Math.min(a, b);
    })
    return min
}

const sum = function(array){
    let sum = array.reduce(function(a, b){
        return a + b;
    }, 0)
    return sum
}

const mean = function(array){
    const s = sum(array)
    const num = s/array.length
    return num.toFixed(3)
}

const med = function(array){
    array = up(array)  
    let half = Math.floor(array.length / 2);
    if (array.length % 2)
      return array[half];

    return (array[half - 1] + array[half]) / 2.0;
}

const sdev = function(array){
    let sd =0
    const m = mean(array)
    for (i = 0; i < array.length; i++){
        sd = sd + Math.pow(array[i] - m, 2);
    }
    const num = Math.sqrt(sd / array.length);
    return num.toFixed(3)
}

newList=[]

//add array
document.querySelector('#addArray').addEventListener('click' , function(e){
    const b = document.querySelector('#array').value
    console.log(b)
    let list = b.split(',').map(function(val) {
        return parseInt(val, 10);
    })
    console.log(list)
    for(v of list)
    {
        newList.push(v);
    }
})


//show answer
/*document.querySelector('#go').addEventListener('change',function(e){
    console.log(newList)
    const choose = document.querySelector('#option').click
    console.log(choose)
    let finalAnswer
    if(choose === '1'){
        finalAnswer = up(newList)
    } else if (choose === '2'){
        finalAnswer = down(newList)
    } else if (choose === '3'){
        finalAnswer = max(newList)
    } else if (choose === '4'){
        finalAnswer = min(newList)
    } else if (choose === '5'){
        finalAnswer = sum(newlist)
    } else if (choose === '6'){
        finalAnswer = meadian(newList)
    } else if (choose === '7'){
        finalAnswer = mean(newList)
    } else if (choose === '8'){
        finalAnswer = sdev(newList)
    } else {
        const elem = document.createElement('p')
        elem.innerText = "Wrong Option"
        document.body.appendChild(elem)
    }
    const elem = document.createElement('p')
    elem.innerText = `Your answer is ${finalAnswer}.`
    document.body.appendChild(elem)
})*/
 function perform_opr(){

    var x=document.getElementById("mysel").value;
    var y = document.getElementById("write");
    switch(x)
    {
        case "up":
            y.innerHTML =  up(newList);
            break;
        case "down":
            y.innerHTML = down(newList);
            break;
        case "max":
            y.innerHTML = max(newList);
            break;
        case "min":
            y.innerHTML = min(newList);
            break;
        case "sum":
            y.innerHTML = sum(newList);
            break;
        case "median":
            y.innerHTML = med(newList);
            break;
        case "mean":
            y.innerHTML = mean(newList);
            break;
        case "stdev":
            y.innerHTML = sdev(newList);
            break;

    }
 }