import React, { Component } from 'react'
//import {withFormik } from 'formik';
//import Yup from 'yup';
import Layout from './layout';
import { NAME_START_CHAR } from 'xmlchars/xml/1.0/ed5';

export default class GiftCard extends Component {

        state = {
            item: {
                id: 'gift-card',
                amount: '',
                name:'',
                recepientsEmail: '',
                rEmail:'',
                senderEmail: '',
                sEmail:''

            },
            errors: {},
            cart: []
          }
          handleAmount = (name, {item} = this.state) => event => {
              event.preventDefault();
              this.setState({
                  item:{...item, [name] : 0}
              })
              this.setState({
                  item:{...item, [name]:event.target.value}
              })
          }
          handleMatch = (name,  {item} = this.state) => event => {
              event.preventDefault()
              const { recepientsEmail, rEmail } = this.state.item
              const match = recepientsEmail === rEmail
              match ? console.log('It Matches') : console.log('It doesn\'t match')
          }
          handleItem = (name, {item} = this.state) => event => {
              event.preventDefault()
              this.setState({
                  item:{...item, [name]: event.target.value, 
              }})
              console.log(this.state, item)
          }
          onSubmit = ({item, cart} = this.state) => event => {
              event.preventDefault();
              this.handleMatch();
              this.setState({
                  cart: [...cart, item]
              })
              console.log(item, cart)
          }
    
    
    render() {
        const { item } = this.state 
        const amounts = ['$25','$50','$75','$100','$200','other']
        let input
        if(item.amount === 'other'){
            input = <div className="other-amount">
            <input type="text" min="1" max="500" placeholder="enter other amount"
                onChange={this.handleItem("Other Amount")}
            required pattern="^[0-9]*$"/>
        </div>
        }
        return (
            <Layout>
            <form>
                <select name="amount" onChange={this.handleItem('amount')}>
                <option value="choose an amount" disabled>Choose an amount</option>
                {amounts.map((amount, index) => (
                        <option key={index} value={amount}>{amount}</option>
                    ))}
                </select>
                {input}
                
                <div className="form name">
                <label htmlFor="name">Name</label>
                <input name="name" type="text" placeholder="Enter Name" value={this.state.item.name} onChange={this.handleItem('name')} />
                </div>
                <div className="form recipient">
                <div className="input">
                <label htmlFor="recipientsEmail">Receipients</label>
                <input type="email" name="recepientsEmail" placeholder="Enter Receipients email" onChange={this.handleMatch("recepientsEmail")}
                ref={node => this.email = node}
                />
                </div>
                <div className="input">
                <input type="email" name="rEmail" placeholder="Re-enter Receipients email"
                    onChange={this.handleItem("rEmail")}
                    ref={node => this.rEmail = node} />
                </div>
                </div>
                
                
                <div className="form sender">
                <div className="input">
                <label htmlFor="senderEmail">Sender</label>
                <input name="senderEmail" type="email" placeholder="Enter Senders email"/>
                </div>
                <div className="input">
                <input type="sEmail" placeholder="Re-enter Senders email"/>
                </div>
                
                </div>
                <div className="form button">
                    <input type="button" value="submit" onClick={this.onSubmit()} />
                </div>
                </form>
                    {console.log(item)}
            </Layout>
        )
    }
}

// const FormikApp = withFormik({

// })(GiftCard)