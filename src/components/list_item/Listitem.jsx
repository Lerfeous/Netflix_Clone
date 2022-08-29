import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import { useState } from "react";
import "./listitem.scss"

export default function Listitem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    
    <div 
    className="listitem"
    style={{left: isHovered && index*225 - 50 + index * 2.5}}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://cdn.mos.cms.futurecdn.net/Xnb4HEar447wmhJJjuRkMY.jpg" alt="" />
     {isHovered && (
   <>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon"/>
          <ThumbUpAltOutlined className="icon"/>
          <ThumbDownAltOutlined className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>2 hour 35mins</span>
          <span className="limit">+16</span>
          <span>2021</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet. Dolores, aper assumenda dolore. Distinctio velit minus, quae error dolor sit amet recusandae.
        </div>
        <div className="genre">Thriller</div>
      </div>
      
    </>
       )}
    </div>
  );
}
