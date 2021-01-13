// input
//var arr= prompt("enter element of array ").split(' ');

const inputField=document.querySelector('.input');
const outputField=document.querySelector('.result');
let arr=[];

document.querySelector('.btnsubmit').addEventListener('click',function(){
arr=[];
let strArray=inputField.value.split(' ');
for(let i=0;i<strArray.length;i++){
    arr.push(Number(strArray[i]));
}
});
var a;
for (a=0;a<arr.length;a++){
    arr[a]=parseInt(arr[a]);
}




// sort in ascending order
function sort_assend(arr){

arr.sort(function(a,b){return a-b});
 return arr;
}
console.log(sort_assend(arr));




// sort in descending order
 function sort_desend(arr){
arr.sort(function(a,b){return b-a});
 return arr;
}
console.log("reverse of array: ", sort_desend(arr));




// max element in array
function max_element(arr){
var max_ele= Math.max(...arr);
return max_ele;
}
console.log("max element in array = " ,max_element(arr));




// min element in array
function min_element(arr){
var min_ele = Math.min(...arr);
return min_ele;
}
console.log("minimun element in array = " ,min_element(arr));

 



// sum of all elment in array 

function arr_sum(arr){
    var sumOfArray=0;

    var i;
    for(i=0;i<arr.length;i++){
        sumOfArray += arr[i];
    }
     return sumOfArray;
}

console.log("sum of all element in array : " , arr_sum(arr));


// median of array

function arr_median( arr){
    var size = arr.length;
    
    var mid= Math.floor(size/2);

    var new_arr=sort_assend(arr);

    if(size%2)
    return new_arr[mid];
    return (new_arr[mid-1]+new_arr[mid])/2;
}
console.log("Median of arr is : " , arr_median(arr));



// mean of array

function arr_avg(arr){
    var size =arr.length;

    var sum= arr_sum(arr);
    return sum/size;
}

console.log("mean of array is : ", arr_avg(arr).toFixed(3));



// standard derivation of array 

function arr_stdev(arr){
    var j;
    var avg= arr_avg(arr);
    var square_diff=0;
    for(j=0;j<arr.length;j++ ){
     square_diff += (arr[j]-avg)*(arr[j]-avg);
    }
    return Math.sqrt(square_diff/arr.length);
}
console.log("standard devation of array is : " ,arr_stdev(arr).toFixed(3));
 
 

var buttons = document.getElementsByTagName("button");
var idEl = document.querySelector(".result");

for(let  i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        var a = buttons[i].name;
         
        if(a === "sort_ass"){
            idEl.innerHTML = sort_assend(arr);
        }
        else if(a === "sort_des"){
            idEl.innerHTML = sort_desend(arr);
        }
        else if(a === "max"){
            idEl.innerHTML = max_element(arr);
        }
        else if(a === "min"){
            idEl.innerHTML = min_element(arr);
        }
        else if(a === "median"){
            idEl.innerHTML = arr_median(arr);
        }
        else if(a === "sum"){
            idEl.innerHTML = arr_sum(arr);
        }
        else if(a === "stddev"){
            idEl.innerHTML = arr_stdev(arr);
        }
        else if(a === "mean"){
            idEl.innerHTML = arr_avg(arr);
        }

    });
}