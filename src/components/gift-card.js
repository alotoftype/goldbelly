import React, { Component } from 'react'
import Gcform from './gc-form';
import GcConfirm from './confirm';
import Success from './success';

export default class GiftCard extends Component {

        state = {
            step:1,
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
            cart: [{
                id: 'gift-card',
                amount: '$10.00',
                name:'Sample',
                recepientsEmail: 'Sample@sample.com',
                rEmail:'Sample@sample.com',
                senderEmail: 'Sender@sender.com',
                sEmail:'Sender@sender.com'
            }]
          }
          nextStep = () => {
            const { step } = this.state;
            this.setState({
              step: step + 1
            });
          };
          // go back to previous step
          prevStep = () => {
            const { step } = this.state;
            this.setState({
              step: step - 1
            });
          };
          startOver = () => {
              this.setState({
                  step: 1
              }) 
          }
          handleMatch = (name,  {item} = this.state) => event => {
              event.preventDefault()
              const { recepientsEmail, rEmail } = this.state.item
              const match = recepientsEmail === rEmail
              if(match){
                  console.log('a match')
              }else {
                  console.log('not a match')
              }
          }
          handleItem = (name, {item} = this.state) => event => {
              event.preventDefault()
              this.setState({
                  item:{...item, [name]: event.target.value, 
              }})
              console.log(this.state, item)
          }
          onSubmit = ({item, cart, step} = this.state) => event => {
              event.preventDefault();
              this.handleMatch();
              this.setState({
                  cart: [...cart, item]
              })
              this.nextStep();

          }
    
    
    render() {
        const { item, errors, cart, step}= this.state

        switch(step) {
            case 1: 
            return (
                <Gcform 
                item={item}
                errors={errors}
                handleItem={this.handleItem}
                onSubmit={this.onSubmit}
                />
            )
            case 2: 
                return <GcConfirm
                    cart={cart}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                />

            case 3:
                return <Success 
                startOver={this.startOver} />

            default: 
            return  (<Gcform 
            item={item}
            errors={errors}
            handleItem={this.handleItem}
            onSubmit={this.onSubmit}
            />)
        }
        
    }
}