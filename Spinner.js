import React, {Component} from 'react'
import Loading from './loading.gif'
import './Spinner.css'
export default function Spinner() {
  return (
    <div className='spinner'>
      <img src={Loading} alt='loading'/>
    </div>
  )
}
