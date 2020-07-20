import React, {useState}  from "react"

function Calculator() {
    const str = ""
    
    function adder(val) {
        
        return str.concat(val)
    }
    function solver(statement) {
        return eval(statement)
    }
    return (
        <div>
            {str}
                    <button
                        onClick={adder(1)}>
                    1</button>
                    <button>+</button>
                    <button type="submit" onSubmit={solver()}>=</button>

        </div>
    )
}

export default Calculator