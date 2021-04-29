import React, { useState, useEffect } from "react";

import {MergeSort} from "../Sorting Algorithms/MergeSort"
import {BubbleSort} from "../Sorting Algorithms/BubbleSort"

import "./SortingVis.css";


const ArrayBarNo = 140;
const PrimaryColor = " #BA36A4 ";
const SecondaryColor = "#E27963";
const AnimationSpeed = 5;


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
   disableButtons();
  const animations = MergeSort(array);
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('array-bar');
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? SecondaryColor : PrimaryColor;
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
  setTimeout(() => {
    enableButtons();
  }, animations.length * AnimationSpeed);
}



   // ----------Handles Bubble Sort animations-------------------------------------

   const bubbleSort = () => {
     disableButtons()
    const animations = BubbleSort(array);   
    for (let i = 0; i < animations.length; i++) {     
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][2]; 
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 2 === 0 ? SecondaryColor: PrimaryColor;
    setTimeout(() => {
      barOneStyle.backgroundColor = color;
      barTwoStyle.backgroundColor = color;
    }, i * <AnimationSpeed></AnimationSpeed>);
  } else {
    setTimeout(() => {
      const [barOneIdx, newHeight] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      barOneStyle.height = `${newHeight}px`;
    }, i * AnimationSpeed);
      }
    }
    setTimeout(() => {
      enableButtons();
    }, animations.length * AnimationSpeed); 
  }


 // ----------Returns Random numbers b/w specified min and max-------------------------------------
  const randomIntFromIntervals = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


// ----------Checks if arrays are equal or not-------------------------------------
const disableButtons =() => {
  const buttons = document.getElementsByClassName("buttons");
   for(let i=0;i<buttons.length;i++)
    buttons[i].disabled =true;
}

const enableButtons = () => {
  const buttons = document.getElementsByClassName("buttons");
   for(let i=0;i<buttons.length;i++)
    buttons[i].disabled =false;
}

const fact = (a) => {
  if(a === 0)
    return 1;
  else
    return a*fact(a-1);
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
        <button className="buttons"  onClick={() => resetArray()}>Generate New Array</button>
        <button className="buttons"  onClick={ () => mergeSort() } >Merge Sort</button>
        <button className="buttons"   onClick={ () => bubbleSort() }>Bubble Sort</button>
      </div>

    </div>
  );
};

export default SortingVis;


