





export const  MergeSort = (array) => {

    function merge( left,right ){
        const arr = []; 
        while(left.length && right.length){

            if(left[0] <right[0])
                arr.push(left.shift());
            else
                arr.push(right.shift());
        }
        return [...arr,...left,...right];
    }

    const sort = array => {
        let half = array.length/2;
        if(array.length <2)
            return array;
        
            const left =    array.splice(0,half);
            return merge(sort(left), sort(array));
    }

    return sort(array);
    
}
