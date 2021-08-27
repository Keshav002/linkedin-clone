import React from 'react'
import './Widgets.css'
import InfoIcon from "@material-ui/icons/Info"
import { FiberManualRecord } from '@material-ui/icons'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>  
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>  
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Coronavirus: UK updates", "Top news - 9099 readers")}
            {newsArticle("Tesla hits new hights", "Cars and auto - 8739 readers")}
            {newsArticle("Bitcoin breaks $22k", "Crypto - 7025 readers")}
            {newsArticle("Is React too good?", "Code - 2390 readers")}
            {newsArticle("Big tech companies needs skilled Web-Developers", "Top news - 10827 readers")}
        </div>

    )
}

export default Widgets
