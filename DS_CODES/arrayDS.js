// que 1 second largerst number
//sometime there could be duplicates so to get unique value we can use set

// let arr = [1, 2, 3, 3, 4, 5];

// document.write("arr_with_duplicates:", arr);

// const uniqueArr = new Set(arr);
// const uniqueArrArray = Array.from(uniqueArr);

// document.write("arr_without_duplicates:", uniqueArr);
// console.log(uniqueArr);
// document.write("arr_without_duplicates:", uniqueArrArray);
// console.log(uniqueArrArray);




let arr=[1,3,34,23,35,36,1]

function secondLargest(arr){
    let largest=-1;
    let secondLargest=-1;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            secondLargest=largest;
            largest=arr[i];
        }
        else if(arr[i]>secondLargest && arr[i]!=largest){
            secondLargest=arr[i]
        }
    }
     return secondLargest;
}

const result=secondLargest(arr);
console.log(result);

// Show the result on the page
//document.body.innerHTML = `<h1>Second Largest Number: ${result}</h1>`;
