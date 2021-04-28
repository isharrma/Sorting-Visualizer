import React, { useState, useEffect } from "react";

import {MergeSort} from "../Sorting Algorithms/MergeSort"
import {BubbleSort} from "../Sorting Algorithms/BubbleSort"

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

  // ----------Handles Merge Sort animations-------------------------------------
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
        }, i * 0.1);
      }
    }
  }


   // ----------Handles Bubble Sort animations-------------------------------------

   const bubbleSort = () => {
    const animations = BubbleSort(array);   
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][2];
      if (isColorChange === true) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 2 === 0 ? SecondaryColor: PrimaryColor;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * AnimationSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 2);
      }
    }
    
  }


 // ----------Returns Random numbers b/w specified min and max-------------------------------------
  const randomIntFromIntervals = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const disableButtons = () =>{
  const buttons = document.getElementsByClassName('buttons');
    for(let i=0;i<buttons.length;i++)
      buttons[i].disabled  = "true";
}

const enableButtons = () =>{
  const buttons = document.getElementsByClassName('buttons');
    for(let i=0;i<buttons.length;i++)
      buttons[i].disabled  = "false";
}

// ----------Checks if arrays are equal or not-------------------------------------
function arraysAreEqual(arrayOne, arrayTwo) {
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
        <button className="buttons" onClick={() => resetArray()}>Generate New Array</button>
        <button className="buttons" onClick={ () => mergeSort() } >Merge Sort</button>
        <button className="buttons" onClick={ () => bubbleSort() }>Bubble Sort</button>
        {/* <button>Insertion Sort</button>
        <button>Quick Sort</button>
        <button onClick={()=>( testSortingAlgorithms() )} >Test Algo</button> */}
        {/* onClick={()=>()} */}
      </div>
    </div>
  );
};

export default SortingVis;
