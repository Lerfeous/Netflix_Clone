import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import { useState } from "react";
import batman_trailer from "/Users/yash/Desktop/NETFLIX/Netflix_Clone/src/components/list_item/trailer.mov";
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
          <PlayArrow/>
          <Add/>
          <ThumbUpAltOutlined/>
          <ThumbDownAltOutlined/>
        </div>
        <div className="itemInfoTop">
          <span>2 hour 35mins</span>
          <span className="limit">+16</span>
          <span>2021</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aperiam omnis dolorum dolor earum assumenda dolore. Distinctio velit minus, quae error recusandae.
        </div>
        <div className="genre">Thriller</div>
      </div>
      
    </>
       )}
    </div>
  );
}
