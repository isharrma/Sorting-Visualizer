import React, { useState, useEffect } from "react";

import {MergeSort} from "../Sorting Algorithms/MergeSort"

import "./SortingVis.css";

const SortingVis = () => {
  const [array, setArray] = useState([]);

  const randomIntFromIntervals = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < 250; i++) {
      arr.push(randomIntFromIntervals(5, 700));
    }
    setArray(arr);
  };

  const testSortingAlgorithms = ()=>{

    for(let i=0;i<100;i++){
        const arr =[];
        for(let j=0;j< randomIntFromIntervals(1,1000) ;j++){
            arr.push(randomIntFromIntervals(-1000,1000));
        }
        const jsSortedArray = arr.slice().sort((a,b)=> a-b);
        const mySortedArray = MergeSort(arr.slice());
        console.log(arraysAreEqual(jsSortedArray,mySortedArray));
    }
  }

  const arraysAreEqual = (arrayOne,arrayTwo) =>{
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
  }



  useEffect(() => {
    resetArray();
  }, []);

  return (
    <div className="array-container">
      {array.map((value, idx) => (
        <div
          className="array-bar"
          key={idx}
          style={{ height: `${value}px` }}
        ></div>
      ))}

      <div className="footer">
        <button onClick={() => resetArray()}>Generate New Array</button>
        <button onClick={()=>(MergeSort(array={array}))} >Merge Sort</button>
        <button>Bubble Sort</button>
        <button>Insertion Sort</button>
        <button>Quick Sort</button>
        <button onClick={()=>( testSortingAlgorithms() )} >Test Algo</button>
        {/* onClick={()=>()} */}
      </div>
    </div>
  );
};

export default SortingVis;
