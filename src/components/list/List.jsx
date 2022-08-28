import { ArrowBackIosOutlined, ArrowForwardIosOutlined, Translate } from '@material-ui/icons'
import ListItem from "../list_item/Listitem.jsx"
import React, { useRef } from 'react'
import "./list.scss";

export default function List() {

  const listRef = useRef();

  const handleClick =(direction)=>{
    let distance = listRef.current.getBoundingClientRect().x - 50
    if(direction === "left")
    {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if(direction === "right")
    {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log(distance)
  }
  return (
    <div className='list'>
        <span className="listTitle">
            Continue To Watch
        </span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick("left")}/>
            <div className="container" ref={listRef}>
              <ListItem/> 
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}
