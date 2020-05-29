import React  from "react"
import Header from "./Header"
import MemeGeneratorComp from "./MGComp"
import "../App.css"

function MemeGenerator() {
    return (
        <div>
            <Header/>
            <MemeGeneratorComp/>
        </div>
    )
}

export default MemeGenerator