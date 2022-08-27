import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import ListItem from "../list_item/Listitem.jsx"
import React from 'react'
import "./list.scss";

export default function List() {
  return (
    <div className='list'>
        <span className="listTitle">
            Continue To Watch
        </span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left'/>
            <div className="container">
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
            <ArrowForwardIosOutlined className='sliderArrow right'/>
        </div>
    </div>
  )
}
