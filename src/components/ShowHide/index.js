// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  onShowLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  onShowFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="h-button">
          <div className="button-align">
            <button
              type="button"
              className="button"
              onClick={this.onShowFirstName}
            >
              Show/Hide FirstName
            </button>
            {showFirstName && <p className="name">Joe</p>}
          </div>
          <div className="button-align button2">
            <button
              type="button"
              className="button"
              onClick={this.onShowLastName}
            >
              Show/Hide LastName
            </button>
            {showLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
