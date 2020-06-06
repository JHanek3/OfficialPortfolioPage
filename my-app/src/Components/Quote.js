import React, {useState, useEffect}  from "react"
import {AnimateOnChange} from "react-animation"
import "../App.css"
import QuoteLs from "./QuoteLs"

//Give a statement with a button
//Then randomly select one
//<button onClick={handleSubmit}>Quote!</button>

function Quote() {
    const [quote, setQuote] = useState()
    
    function handleSubmit(event){
        event.preventDefault()
        const randomQuote = QuoteLs[Math.floor(Math.random()*QuoteLs.length)]
        setQuote(randomQuote)
    }
    
    return (
        <div className="quoteBig">
            <div className="quoteFixed">
                <h1 className="quoteHeader">Random Quote Generator</h1>
                <p className="quotePara">I've read a lot of books, it was only recently that I started 
                    writing/saving meanigful statements I came across. Enjoy!</p>
                <button className="quoteBtn" onClick={handleSubmit}>Quote!</button><br></br>
                <div className="quoteRemain">
                    <AnimateOnChange 
                        animationIn="custom-animation-in 500ms ease-out forwards"
                        animationOut="custom-animation-out 500ms ease-out forwards"
                        durationOut={500}>{quote}
                    </AnimateOnChange>
                </div>
            </div>
        </div>
    )
}

export default Quote