import React from 'react'

const Gcform = (props) => {
    const { item, handleItem, onSubmit} = props
    console.log(props)
    let input
    const amounts = ['$25','$50','$75','$100','$200','other']

    if(item.amount === 'other'){
        input = <div className="form other-amount">
        <label htmlFor="otherAmount">Enter Dollar Amount</label>
        <input name="otherAmount" type="text" min="1" max="500" placeholder="enter other dollar amount"
            onChange={handleItem("Other Amount")}
        required pattern="^[0-9]*$"/>
    </div>
    }
    return (
        <form>
            <div className="heading">
                Purchase a Digital GiftCard
            </div>
                <select name="amount" onChange={handleItem('amount')}>
                <option value="choose an amount" disabled>Choose an amount</option>
                {amounts.map((amount, index) => (
                        <option key={index} value={amount}>{amount}</option>
                    ))}
                </select>
                {input}
                
                <div className="form name">
                <label htmlFor="name">Name</label>
                <input name="name" type="text" placeholder="Enter Name" value={item.name} onChange={handleItem('name')} />
                </div>
                <div className="form recipient">
                <div className="input">
                <label htmlFor="recipientsEmail">Receipients</label>
                <input type="email" name="recepientsEmail" placeholder="Enter Receipients email" onChange={handleItem("recepientsEmail")}
                />
                </div>
                <div className="input">
                <input type="email" name="rEmail" placeholder="Re-enter Receipients email"
                    onChange={handleItem("rEmail")} />
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
                    <input type="button" value="submit" onClick={onSubmit()} />
                </div>
                </form>
    )
}

export default Gcform
