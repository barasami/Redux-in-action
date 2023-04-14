import React from 'react'
import './Logic.css'

function Logic() {
    const submittedForm=(e)=>{
        e.preventDefault()
    }
  return (
    <div className="App">
      <form className='form' onSubmit={submittedForm}>
            <div className='title'>
                <h4 className='head'>SIMPLE CALCULATOR</h4>
            </div>
            <div className='numb1'>
                <input type='number' className='inputs'  placeholder='Enter numb1'></input>
            </div>
            <div className='numb2'>
                <input type='number' className='inputs' placeholder='Enter numb2'></input>
            </div>
            <div className='answer'>
                <input  className='inputs' placeholder='Your Answer...'></input>
            </div>
            <div className='btns'>
                <button className='add'>Add</button>
                <button className='subtract'>Subtract</button>
                <button className='multiply'>Multiply</button>
            </div>
      </form>
    </div>
  )
}

export default Logic