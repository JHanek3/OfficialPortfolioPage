import React  from "react"
import Header from "./MemeHeader"
import MemeGeneratorComp from "./MGComp"
import "../compCSS/MemeGenerator.css"

function MemeGenerator() {
    return (
        <div>
            <Header/>
            <MemeGeneratorComp/>
        </div>
    )
}

export default MemeGenerator