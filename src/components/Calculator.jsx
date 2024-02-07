import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ScoreCard from './ScoreCard';
import Slider from '@mui/material/Slider';

import { calc_value } from '../controller/controllor';

export default function Calculator() {
    const [rangeInputs,setRangeInputs] = useState({
        MDL:0,
        SPT:0,
        HRP:0,
        SDC:0,
        PLK:0,
        MR2:0,
    });
    const [age,setAge] = useState("17-21");
    const [gender,setGender] = useState("Male");
    const parameters = ["MDL","SPT","HPR","SDC","PLK","2MR"];
    const units = ["lbs","m","reps","","",""];
    const minmax = useMemo(() => [
        { min: 60, max: 340 },
        { min: 2.3, max: 13.1 },
        { min: 0, max: 62 },
        { min: 348, max: 89 },
        { min: 40, max: 220 },
        { min: 1620, max: 802 },
    ], []);

    const keysRangeInputs = Object.keys(rangeInputs);

    const [totalP,setTotalP] = useState(0);
    const [result,setResult] = useState("Does not meet standard");

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        // console.log(rangeInputs);
        setRangeInputs((prev)=>{
            return{
                ...prev,
                [name]:value/10
            }
        });
    }
    const calculateValue = useCallback((index, value) => {
        const minval = minmax[index].min;
        const maxval = minmax[index].max;
        let currentValue = minval + ((value / 100) * (maxval - minval));
        if (index === 1) {
            currentValue = parseFloat(minval) + ((value / 100) * parseFloat(maxval - minval));
            return currentValue.toFixed(1);
        }
        if (index >= 3) {
            let minutes = Math.floor(currentValue / 60);
            let seconds = Math.floor(currentValue % 60);
            if (minutes < 10) minutes = "0" + minutes;
            if (seconds < 10) seconds = "0" + seconds;
            return minutes + ":" + seconds;
        }
        currentValue = Math.floor(currentValue);
        return currentValue;
    }, [minmax]);

    useEffect(() => {
        const mdl = Number(calc_value(1, age, gender, calculateValue(0, rangeInputs[keysRangeInputs[0]])));
        const spt = Number(calc_value(2, age, gender, calculateValue(1, rangeInputs[keysRangeInputs[1]])));
        const hrp = Number(calc_value(3, age, gender, calculateValue(2, rangeInputs[keysRangeInputs[2]])));
        const sdc = Number(calc_value(4, age, gender, calculateValue(3, rangeInputs[keysRangeInputs[3]])));
        const plk = Number(calc_value(5, age, gender, calculateValue(4, rangeInputs[keysRangeInputs[4]])));
        const mr2 = Number(calc_value(6, age, gender, calculateValue(5, rangeInputs[keysRangeInputs[5]])));

        const totalCalc = mdl + spt + hrp + sdc + plk + mr2;
        setTotalP(parseInt(totalCalc));

        if (mdl >= 60 && spt >= 60 && hrp >= 60 && sdc >= 60 && plk >= 60 && mr2 >= 60) {
            setResult("Passed");
        } else {
            setResult("Does not meet standard.");
        }
    }, [rangeInputs, age, gender, calculateValue, keysRangeInputs]);

  return (
    <div  className='lg:w-1/2 md:w-2/3 sm:w-9/12 w-full  mx-auto text-center mt-5 '>
        <div style={{maxWidth:"750px"}} className='mx-auto'>
        <div className='bg-white lg:rounded-2xl md:rounded-xl sm:rounded-lg rounded-sm shadow-lg py-10'>
            <div className='flex justify-around '>
                <label htmlFor="age">Age :
                <select id='age' className='p-2 focus:outline-none'
                onChange={(e)=>{setAge(e.target.value)}}
                value={age}
                >
                <option value="17-21">17-21</option>
                <option value="22-26">22-26</option>
                <option value="27-31">27-31</option>
                <option value="32-36">32-36</option>
                <option value="37-41">37-41</option>
                <option value="42-46">42-46</option>
                <option value="47-51">47-51</option>
                <option value="52-56">52-56</option>
                <option value="57-61">57-61</option>
                <option value="62+">62+</option>
                </select>
                </label>
                <label htmlFor="Gender">Gender :
                <select id='Gender' className='p-2 focus:outline-none'
                value={gender}
                onChange={(e)=>{setGender(e.target.value)}}
                >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                </select>
                </label>
            </div>

            <div className='w-11/12 mx-auto'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='w-1/12 '></th>
                            <th className='w-8/12'></th>
                            <th className='w-2/12'></th>
                            <th className='w-1/12'></th>
                        </tr>
                    </thead>
                <tbody>
                    {parameters.map((parameter,index)=>(
                
                    <tr key={index} className='table-row h-16'>
                        <td>
                            <p>{parameter}</p>
                        </td>
                        <td >
                            <div className='flex items-center'>
                            <Slider sx={{color:"#13BB24",height:"7px",width:"90%",marginX:"auto"}} 
                                defaultValue={0} 
                                max={1000}
                                name={keysRangeInputs[index]} 
                                value={rangeInputs[keysRangeInputs[index]]*10} 
                                onChange={handleChange} 
                            />
                            </div>
                        </td>
                        <td>
                            <p>
                                {calculateValue(index,rangeInputs[keysRangeInputs[index]])} {units[index]}
                            </p>
                        </td>
                        <td>
                            <div>
                                <p style={calc_value(index+1,age,gender,calculateValue(index,rangeInputs[keysRangeInputs[index]]))>=60?{backgroundColor:"#13BB24"}:{}} className='border px-4 py-1 rounded-xl shadow-sm'>{calc_value(index+1,age,gender,calculateValue(index,rangeInputs[keysRangeInputs[index]]))}</p>
                            </div>
                        </td>
                    </tr>
            ))}
            </tbody>
            </table>
            </div>
            
            <div className='flex justify-around my-5 flex-wrap'>
                <ScoreCard heading="Total Points:" value={totalP}/>
                <ScoreCard heading="Result:" value={result}/>
            </div>
        </div>
        </div>
    </div>
  )
}
