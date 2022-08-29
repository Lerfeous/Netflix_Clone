import { ArrowBackOutlined } from "@material-ui/icons"
import trailer from "/Users/yash/Desktop/NETFLIX/Netflix_Clone/src/pages/watch/trailer.mov";
import "./watch.scss"

export default function Watch() {
  return (
    <div className="watch" >
        <div className="back">
            <ArrowBackOutlined/>
            home
        </div>
     <video  className="video" autoPlay progress controls src={trailer}/>
    </div>
  )
}
