// input
var arr= prompt("enter element of array ").split(' ');

var a;
for (a=0;a<arr.length;a++){
    arr[a]=parseInt(arr[a]);
}




// sort in ascending order

arr.sort(function(a,b){return a-b});
console.log("sorted array : ",arr);




// sort in descending order

arr.sort(function(a,b){return b-a});
console.log("reverse of array: ", arr);




// max element in array

var max_element = Math.max(...arr);
console.log("max element in array = " ,max_element);




// min element in array

var min_element = Math.min(...arr);
console.log("minimun element in array = " ,min_element);

 



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

    arr.sort(function(a,b){return a-b});

    if(size%2)
    return arr[mid];
    return (arr[mid-1]+arr[mid])/2;
}
console.log("Median of arr is : " , arr_median(arr));



// mean of array

function arr_avg(arr){
    var size =arr.length;

    var arr_sum=0;
    var i;
    for(i=0;i<size;i++){
        arr_sum += arr[i];

    }
    return arr_sum/size;
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