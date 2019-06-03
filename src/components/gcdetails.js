import React, { Component } from 'react'
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'

export default class GCdetails extends Component {

    

    render() {
        const {handleChange, addToCart, cart } = this.props;
        const item = {
            amount:'',
            type:'e-giftCard'

            
        }
        const amounts = ['$25','$50','75','$100','$200','other']
        console.log('what is the cart value:', cart)
        return (
            <div className="gc-form">
                <Select
                native
                name='amount'
                placeholder="Choose Amount"
                defaultValue="Choose Amount"
                label="Choose Amount"
                >
                <option value="" disabled>
                    Choose an amount
                </option>
                    {amounts.map((amount, index) => (
                        <option key={index} value={amount}>{amount}</option>
                    ))}
                </Select>
                <div>
                <TextField
                label="Name"
                required
                fullWidth
                placeholder="Enter Your Name"
                onChange={handleChange}
                />
                </div>
                <div className="">
                <TextField
                label="Recipients Email"
                required
                placeholder="Recipients Email"
                />
                 <TextField
                label="Re-Enter  Email"
                required
                placeholder="Re-Enter  Email"
                />
                </div>
                <div>
                <TextField
                label="Sender's Email"
                required
                placeholder="Sender's  Email"
                /> 
                <TextField
                label="Re-Enter  Email"
                required
                placeholder="Re-Enter  Email"
                />
                </div>
                <div>
                    <TextField
                    multiline
                    rows="4"
                    required
                    label="Gift Message"
                    />


                </div>
                <Button
                variant="outlined"
                color="secondary"
                size="large"
                onClick={addToCart(item)}
                >
                    Add to cart
                </Button>
            </div>
        )
    }
}
