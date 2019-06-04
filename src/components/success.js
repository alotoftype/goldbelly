import React from 'react'

const Success = (props) => {
    return (
        <div>
            <h2>Gift Card Added to Cart </h2>
            <p>Please feel free to continue to shop around</p>
            <div className="confirm button">
<input type="button" value="StartOver" onClick={props.startOver} />
                </div>
        </div>
    )
}

export default Success
