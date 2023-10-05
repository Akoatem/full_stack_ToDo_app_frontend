import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import axios from 'axios'
import { getAllToDo } from '../utils/HandleAPI'


const baseUrl = "http://localhost:5000";

const ToDo = ({text, updateMode, deleteToDo}) => {


  return (
    <div className='todo'>
        <div className='text'>{text}</div>
        <div className='icons'>
            <BiEdit className="icon" onClick={updateMode}/>
            <AiFillDelete className="icon" onClick={deleteToDo}/> 
        </div>
    </div>
  )
}

export default ToDo