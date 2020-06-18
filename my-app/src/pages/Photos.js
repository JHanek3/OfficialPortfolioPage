import React, {useContext} from "react"
import Image from "../components/PicSomeImage"
import {Context} from "../context/PicSomeContext"
import {getClass} from "../utils/indexPhoto"

function Photos() {
    const {allPhotos} = useContext(Context)

    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
    
    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos