import React, { useEffect, useState } from 'react'
import ScoreCard from './ScoreCard';
import Slider from '@mui/material/Slider';

export default function Calculator() {
    const [rangeInputs,setRangeInputs] = useState({
        MDL:0,
        SPT:0,
        HRP:0,
        SDC:0,
        PLK:0,
        MR2:0,
    });
    const parameters = ["Maximum Deadlift (MDL):","Standing Power Throw (SPT):","Hand Release Push-Up (HRP):",
    "Spring Drag Carry (SDC):","Plank Hold (PLK):","2-Mile Run (2MR)"];
    const units = ["lbs","m","reps","","",""];
    const minmax = [{min:60,max:340},{min:2.3,max:13.1},{min:0,max:62},{min:348,max:89},{min:40,max:220},{min:1620,max:802}];

    const keysRangeInputs = Object.keys(rangeInputs);

    const [totalP,setTotalP] = useState(0);
    const [result,setResult] = useState("Does not meet standard");

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        
        setRangeInputs((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        });
    }
    function calculateValue(index,value){
        const minval = minmax[index].min;
        const maxval = minmax[index].max;
        let currentValue = minval +((value / 100) * (maxval - minval));
        
        if(index>=3){
            const minutes = Math.floor( currentValue / 60 );
            const seconds = Math.floor(currentValue%60);
            return minutes+":"+seconds;
        }
        currentValue = Math.floor(currentValue) ;
        return currentValue;

    }
    useEffect(() => {
          const mdl = Number(rangeInputs.MDL);
          const spt = Number(rangeInputs.SPT);
          const hrp = Number(rangeInputs.HRP);
          const sdc = Number(rangeInputs.SDC);
          const plk = Number(rangeInputs.PLK);
          const mr2 = Number(rangeInputs.MR2);

          setTotalP(mdl+spt+hrp+sdc+plk+mr2);
        
          if(mdl>=60 && spt>=60 && hrp>=60 && sdc>=60 && plk>=60 && mr2>=60){
            setResult("Passed");
          }else{
            setResult("Does not meet standard.");
          }
      }, [rangeInputs]);
 
  return (
    <div className='lg:w-1/2 md:w-2/3 sm:w-9/12 w-11/12   mx-auto text-center lg:-mt-52 md:-mt-64 sm:-mt-80 -mt-96'>
        <div className='bg-white rounded-sm py-3'>
            <div className='flex justify-around my-2'>
                <label htmlFor="age">Age :
                <select id='age' className='p-2 focus:outline-none'>
                <option value="17-21">17-21</option>
                <option value="22-26">22-26</option>
                <option value="27-31">27-31</option>
                <option value="32-36">32-36</option>
                <option value="36+">36+</option>
                </select>
                </label>
                <label htmlFor="Gender">Gender :
                <select id='Gender' className='p-2 focus:outline-none'>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
                </select>
                </label>
            </div>

            <div className='w-10/12 mx-auto'>
            
            {parameters.map((parameter,index)=>(
                <div key={index}>
                    <p>{parameter}</p>
                    <Slider sx={{color:"#13BB24",height:"10px"}} 
                    defaultValue={0} 
                    name={keysRangeInputs[index]} 
                    value={rangeInputs[keysRangeInputs[index]]} 
                    onChange={handleChange} 
                    
                    />
                    <div className='values flex justify-between'>
                        <p>
                            {calculateValue(index,rangeInputs[keysRangeInputs[index]])} {units[index]}
                        </p>
                        <div>
                            <p className='p-0'>Points</p>
                            <p style={rangeInputs[keysRangeInputs[index]]>=60?{backgroundColor:"#13BB24"}:{}} className='border px-4 py-1 rounded-xl'>{rangeInputs[keysRangeInputs[index]]}</p>
                        </div>
                    
                    </div>
                </div>
            ))}
            
            </div>
            
            <div className='flex justify-around mt-5 mb-14 flex-wrap'>
                <ScoreCard heading="Total Points:" value={totalP}/>
                <ScoreCard heading="Result:" value={result}/>
            </div>
        </div>
    </div>
  )
}
