import React , {useState ,useEffect} from 'react'
import "./SortingVis.css"

const SortingVis = () => {

    const [ array , setArray] = useState([]);

    const randomIntFromIntervals = (min,max) => {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    const resetArray = () => {
        const arr =[];
        for(let i=0;i<100;i++){
            arr.push(randomIntFromIntervals(5,1000));
        }
        setArray(arr);
    }

    useEffect( ()=>{
        resetArray();
    },[])

    return(
        <div>
            {
                array.map((value,idx) => (
                    <div className="array-bar" key={idx}>
                        {value}
                    </div>
                ))
            }
        </div>
    );
}

export default SortingVis;

