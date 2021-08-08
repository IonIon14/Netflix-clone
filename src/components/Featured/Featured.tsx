import React from 'react'
import MainImage from "../../assets/main-image.jpg";
import TitleLogo from "../../assets/logo.png";
import "./Featured.scss";
import { InfoOutlined, PlayArrow } from '@material-ui/icons';


const Featured = ({ type }: { type: any }) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
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
            <img src={MainImage} alt="profile-pic" className="main-image" />
            <div className="info">
                <img src={TitleLogo} alt="logo" />
                <span className="description">
                    A computer hacker learns that what most people perceive as reality is actually a simulation created by machines, and joins a rebellion to break free. Four Academy Awards went to this game-changing cyber-thriller starring Keanu Reeves and Laurence Fishburne.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Featured
