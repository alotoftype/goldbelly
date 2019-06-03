import React, { Component } from 'react'
import Layout from './layout';

export default class GiftCard extends Component {
    
    state = {
      item: {
          id: 'gift-card'
      },
      cart: []
    }
    handleAmount = (name, {item} = this.state) => event => {
        event.preventDefault();
        this.setState({
            item:{...item, [name] : 0}
        })
        // this.setState({
        //     item:{...item, [name]:event.target.value}
        // })
    }
    handleMatch = (name, {item} = this.state) => event => {
        event.preventDefault()
        console.log(event.target.value)
        if(item.recipients === item.receipientsMatch){
            console.log('they match')
        }
    }
    handleItem = (name, {item} = this.state) => event => {
        event.preventDefault()
        this.setState({
            item:{...item, [name]: event.target.value, 
        }})
        console.log(this.state, item)
    }
    render() {
        const { item } = this.state 
        const amounts = ['$25','$50','$75','$100','$200','other']
        return (
            <Layout>
            <form>
                <select name="amount" onChange={this.handleItem('amount')}>
                <option value="choose an amount" disabled>Choose an amount</option>
                {amounts.map((amount, index) => (
                        <option key={index} value={amount}>{amount}</option>
                    ))}
                </select>
                <div className="other-amount">
                    <input type="text" placeholder="enter other amount"
                        onChange={this.handleItem("Other Amount")}
                    />
                </div>
                <div className="">
                <input type="text" placeholder="Enter Name" onChange={this.handleItem('Name')}/>
                </div>
                <div className="">
                <input type="email" name="r" placeholder="Enter Receipients email" onChange={this.handleMatch("recipients")}/>
                <input type="email" name="r-check"placeholder="Re-enter Receipients email"
                    onChange={this.handleMatch("recipientsMatch")}
                />
                </div>
                <div className="">
                <input type="email" placeholder="Enter Senders email"/>
                <input type="email" placeholder="Re-enter Senders email"/>
                </div>
                <div className="button">
                    <input type="button" value="submit" onClick={this.handleSubmit} />
                </div>
                </form>
                    {console.log(item)}
            </Layout>
        )
    }
}
