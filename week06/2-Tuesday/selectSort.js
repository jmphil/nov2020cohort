//quadratic
//smallest = 0
let arr = [4, 5, 3, 6, 10, 0] // 0, 3, 4, 5, 6, 10

function selectionSort (arr){

    for(i = 0; i < arr.length; i++){
        let smallest = i;
        
        for(let j = i+1; j<arr.length; j++){

            if(arr[j] < arr[smallest]){
                smallest = j;
            }
        }; //end of for loop

        if(i !== smallest){
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
    }
    }
    
    return arr;
}

console.log(selectionSort(arr));

//------------- Bubble sort for Homework -----------//

let arr = [4, 5, 3, 6, 10, 0] // 0, 3, 4, 5, 6, 10
