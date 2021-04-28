import React, { useState, useEffect } from "react";

import {MergeSort} from "../Sorting Algorithms/MergeSort"

import "./SortingVis.css";


const ArrayBarNo = 140;
const PrimaryColor = " #BA36A4 ";
const SecondaryColor = "#E27963";
const AnimationSpeed = 10;


const SortingVis = () => {
  const [array, setArray] = useState([]);

   // Handles Generate Array functionality
   const resetArray = () => {
    const arr = [];
    for (let i = 0; i < ArrayBarNo; i++) {
      arr.push(randomIntFromIntervals(5, 550));
    }
    setArray(arr);
  };

  // Handles Merge Sort animations
 const mergeSort = () => {
    const animations = MergeSort(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange === true) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        console.log(barOneStyle.backgroundColor);
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SecondaryColor: PrimaryColor;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * AnimationSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * AnimationSpeed);
      }
    }
  }



  const randomIntFromIntervals = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

 

 //  To check if the algorithms are working properly or not {Remove at end}
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
            style={{
              backgroundColor: PrimaryColor,
              height: `${value}px`,
            }}></div>
      ))}

      <div className="footer">
        <button onClick={() => resetArray()}>Generate New Array</button>
        <button onClick={ () => mergeSort() } >Merge Sort</button>
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
