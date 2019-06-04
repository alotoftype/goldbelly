import React from 'react'

const GcConfirm = (props) => {
    console.log(props)
    const {cart, prevStep, nextStep} = props
    const cartItem = Object.entries(cart[0])

 
    return (
        <div>
            <h2>Confirm order</h2>
        <div className="list">
        <ul>
                { cartItem.filter(([field, ])=>{
        return field !== 'rEmail'
    }).filter(([field, ])=>{
        return field !== 'sEmail'
    }).map(([field, value],index) => (
                    <li key={index}><span className="fieldTitle">{field}:</span> {value} </li>
                ))
                }
            </ul>
        </div>
        <div className="confirm button">
        <input type="button" value="Back" onClick={prevStep} /><input type="button" value="Next" onClick={nextStep} />
                </div>
        </div>
    )
}

export default GcConfirm
