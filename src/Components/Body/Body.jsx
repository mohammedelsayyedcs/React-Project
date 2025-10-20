import React, { Component } from 'react'

export default class Body extends Component {
  state = {
    name: 'Mohamed',
    age: 37,
    balance: 4000,
  }

  // Methods
  changeName(str) {
    this.setState({ name: str })
  }
  increaseBalance(isIncrease) {
    const amount = parseInt(document.getElementById('balanceId').value)

    if (isIncrease) {
      this.setState({ balance: this.state.balance + amount })
    } else {
      this.setState({ balance: this.state.balance - amount })
    }
  }

  render() {
    return (
      <div className='container'>
        <h3 className='text-center fw-bold text-info py-5'>Welcome to Our First React Project</h3>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-danger fw-bold">Your Name: </label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name here"
            onKeyUp={(event) => { this.changeName(event.target.value) }} />
        </div>
        <div className='body-info ms-5'>
          <h5>Your Name: <span className='text-danger'>{this.state.name}</span></h5>
          <h5>Your Age: <span className='text-danger'>{this.state.age}</span></h5>
          <h5>Your Balance: <span className='text-danger'>{this.state.balance} {this.props.currency}</span></h5>

          {/* Balance */}
          <div className='balance-change container my-5'>
            <div className="mb-3">
              <label htmlFor="balanceId" className="form-label text-danger fw-bold">Enter a Number:</label>
              <input type="number" className="form-control w-50" id="balanceId" name="numericInput" min="0" max="10000" step="100" defaultValue={"0"} />
            </div>
            <button className='btn btn-success ms-5 me-5' onClick={() => { this.increaseBalance(true) }}>Increase Balance</button>
            <button className='btn btn-danger' onClick={() => { this.increaseBalance(false) }}>Decrease Balance</button>
          </div>

        </div>

      </div>
    )
  }
}
