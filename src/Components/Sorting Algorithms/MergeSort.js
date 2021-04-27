export const MergeSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliary = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliary, animations);
    return animations;
}



// // This function  creates partition 

const mergeSortHelper = (mainArray , left , right , auxiliary , animations) => {
     if (left === right) return;

    const mid = Math.floor((left + right) / 2);
    mergeSortHelper(auxiliary, left, mid, mainArray, animations);
    mergeSortHelper(auxiliary, mid+ 1, right, mainArray, animations);
    merge(mainArray, left, mid, right, auxiliary, animations);

}


// // This function merges the partioned array  by checking each member of the partition array. 

const merge = (mainArray , left , mid, right ,auxiliary , animations) =>{
    let  i = left;
    let j = mid +1;
    let k = left;

    while (i <= mid && j <= right) {
    animations.push([i, j]);                     // 1st = comapring and changing the color
    animations.push([i, j]);                     // 2nd = compating and finally setting the color to original color
    if (auxiliary[i] <= auxiliary[j]) {
      animations.push([k, auxiliary[i]]);
      mainArray[k++] = auxiliary[i++];
    } else {
      animations.push([k, auxiliary[j]]);
      mainArray[k++] = auxiliary[j++];
    }
  }
  while (i <= mid) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliary[i]]);
    mainArray[k++] = auxiliary[i++];
  }
  while (j <= right) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliary[j]]);
    mainArray[k++] = auxiliary[j++];
  }
}




// // -----------------------------------------------------------------------------
// // This is an easy way to do  it in JS and above is the one that is on GFG.
// // -----------------------------------------------------------------------------


// // export const  MergeSor = (array) => {

// //     function merge( left,right ){
// //         const arr = []; 
// //         while(left.length && right.length){

// //             if(left[0] <right[0])
// //                 arr.push(left.shift());
// //             else
// //                 arr.push(right.shift());
// //         }
// //         return [...arr,...left,...right];
// //     }

// //     const sort = array => {
// //         let half = array.length/2;
// //         if(array.length <2)
// //             return array;
        
// //             const left =    array.splice(0,half);
// //             return merge(sort(left), sort(array));
// //     }

// //     return sort(array);
    
// // }
  



