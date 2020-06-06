import React, {useState, useEffect, useRef} from "react"

function SpeedTypingGame() {

    const STARTING_TIME = 15

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)

    const textBoxRef = useRef(null)


    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(STARTING_TIME)
        setText("")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }

    function endGame() {
        setIsTimeRunning(false)
        const numWords = calculateWordCount(text)
        setWordCount(numWords)
    }

    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        const filteredWords = wordsArr.filter(word => word !== "")
        return filteredWords.length
    }

    useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if (timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning] )

    return (
        <div className="speedHolder">
            <h1 className="speedH1">How fast do you type?</h1>
            <textarea 
                className="speedTextArea"
                ref={textBoxRef} 
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining} </h4>
            <button 
                className="speedBtn" 
                onClick={startGame}
                disabled={isTimeRunning}
            >
            Start</button>
            <h1>Word Count: {wordCount}</h1>
        </div>
    )
}

export default SpeedTypingGame