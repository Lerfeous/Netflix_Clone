import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option >Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src="https://images.hdqwalls.com/wallpapers/ghost-of-tsushima-iki-island-5k-cu.jpg " alt="" />
        <div className="info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ghost_of_Tsushima_logo_black.svg/1280px-Ghost_of_Tsushima_logo_black.svg.png" alt="" />
            <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellat modi magni molestias, quo libero, doloribus dolores quidem nesciunt porro quod tempore optio delectus odit et fuga nobis. Inventore, dignissimos!
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
