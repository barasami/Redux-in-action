import React, { useState } from 'react'
import './Logic.css'
import { useDispatch, useSelector } from 'react-redux'
import { mathSliceActions } from '../Store/HandleMath_Slice'

function Logic() {
    const[firstnumb,setNumb]=useState(0)
    const[secondnumb,setSecondNumb]=useState(0)
    let selector=useSelector((state)=>state.mathslice.Ans)
    const firstNumb=(e)=>{
        setNumb(e.target.value)
    }
    const secondNumb=(e)=>{
        setSecondNumb(e.target.value)
    }
    const dispatch=useDispatch()
    
    const submittedForm=(e)=>{
        e.preventDefault()
    }
    const AddMe=()=>{
        dispatch(mathSliceActions.Add(
            firstnumb,
            secondnumb
        ))
    }
    const SubtractMe=()=>{
        dispatch(mathSliceActions.Subtract(
            {firstnumb},
            {secondnumb}
        ))

    }
    const MultiplyMe=()=>{
        dispatch(mathSliceActions.Multiply(
            firstnumb,
            secondnumb
        ))

    }
  return (
    <div className="App">
      <form className='form' onSubmit={submittedForm}>
            <div className='title'>
                <h4 className='head'>SIMPLE CALCULATOR</h4>
            </div>
            <div className='numb1'>
                <input type='number' className='inputs' value={firstnumb} onChange={firstNumb} placeholder='Enter numb1'/>
            </div>
            <div className='numb2'>
                <input type='number' className='inputs' value={secondnumb} onChange={secondNumb} placeholder='Enter numb2'/>
            </div>
            <div className='answer2'>
                <text type='' className='answer'>Your Answer: {selector}</text>
            </div>
            <div className='btns'>
                <button className='add' onClick={AddMe}>Add</button>
                <button className='subtract' onClick={SubtractMe}>Subtract</button>
                <button className='multiply' onClick={MultiplyMe}>Multiply</button>
            </div>
      </form>
    </div>
  )
}

export default Logic