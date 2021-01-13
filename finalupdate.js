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


var sort_up=false;
var sort_down=false;
var max_ele=false;
var min_ele=false;
var median=false;
var mean=false;
var sum=false;
var stdev=false;
// sort in ascending order
function sort_assend(arr){
 if(sort_up == false){
sort_up=arr.sort(function(a,b){return a-b});
 }
 return sort_up;
}
console.log(sort_assend(arr));




// sort in descending order
 function sort_desend(arr){
     if(sort_down== false){
sort_down=arr.sort(function(a,b){return b-a});
     }
     return sort_down;
}
console.log("reverse of array: ", sort_desend(arr));




// max element in array]
 
function max_element(arr){
    if(max_ele== false){
     max_ele= Math.max(...arr);
}
    return max_ele;
     
 
}
console.log("max element in array = " ,max_element(arr));




// min element in array
function min_element(arr){
    if(min_ele == false){
    var min_ele = Math.min(...arr);}
    return min_ele;
    
}
console.log("minimun element in array = " ,min_element(arr));

 



// sum of all elment in array 

function arr_sum(arr){
      if(sum== false){
    var sumOfArray=0;

    var i;
    for(i=0;i<arr.length;i++){
        sumOfArray += arr[i];
    }
    sum=sumOfArray;
}
     return sum;
}

console.log("sum of all element in array : " , arr_sum(arr));


// median of array

function arr_median( arr){
    if(median == false){
    var size = arr.length;
    
    var mid= Math.floor(size/2);

    var new_arr=sort_assend(arr);

    if(size%2){
    median = new_arr[mid];}
    else {
     (new_arr[mid-1]+new_arr[mid])/2;}
}
return median;
}
console.log("Median of arr is : " , arr_median(arr));



// mean of array

function arr_avg(arr){
    if(mean == false){
    var size =arr.length;

    var sum= arr_sum(arr);
    mean = sum/size;
}
return mean;

}

console.log("mean of array is : ", arr_avg(arr).toFixed(3));



// standard derivation of array 

function arr_stdev(arr){
    if(stdev == false){
    var j;
    var avg= arr_avg(arr);
    var square_diff=0;
    for(j=0;j<arr.length;j++ ){
     square_diff += (arr[j]-avg)*(arr[j]-avg);
    }
    stdev= Math.sqrt(square_diff/arr.length);
}
return stdev
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