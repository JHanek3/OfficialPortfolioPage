import React, {useState, useEffect} from "react"
import "../compCSS/MemeGenerator.css"

function MemeGeneratorComp() {
    const [data, setData] = useState()
    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")
    const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg")

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                setData(memes)
            })
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        if (name === "toptext") {
            setTopText(value)
        } else if (name === "bottomtext") {
            setBottomText(value)
        } else {
            console.log("Its broke")
        }
    }

    function handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * data.length)
        const randMemeImg = data[randNum].url
        setRandomImg(randMemeImg)
    }

    return (
        <div>
            <form className="meme-form" onSubmit={handleSubmit}>
                <input
                    type="text" 
                    name="toptext"
                    placeholder="Top Text"
                    value={topText}
                    onChange={handleChange}
                />
                <input
                    type="text" 
                    name="bottomtext"
                    placeholder="Bottom Text"
                    value={bottomText}
                    onChange={handleChange}
                />
                <button>Gen</button>
            </form>
            <div className="meme">
                <img src={randomImg} alt=""/>
                <h2 className="top">{topText}</h2>
                <h2 className="bottom">{bottomText}</h2>
            </div>
        </div>
    )
}

export default MemeGeneratorComp