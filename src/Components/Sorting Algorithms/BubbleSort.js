export function BubbleSort(array){

    const animations =[];

    if(array.length<=1)return array;

    const auxiliaryArray=array.slice();

    bubbleSortHelp(auxiliaryArray,animations);

    return animations;

}

function bubbleSortHelp(
    	arr,
	   animations,
	    ){
  let swapped;
  let i,j;

  for(i = 0;i< arr.length-1;i++){
    swapped = false;
    for(j=0;j<arr.length-i-1;j++){
      animations.push([j,j+1,true]);
      animations.push([j,j+1,true]);
      if(arr[j]>arr[j+1]){
        animations.push([j,arr[j+1],false]);
        animations.push([j+1,arr[j],false]);
         let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      
        swapped = true;
      }
    }
    if(swapped === false)
        break;
  }

}







