import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, coin: 'head'}

  onClicked = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        total: prevState.total + 1,
        coin: 'head',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        total: prevState.total + 1,
        coin: 'tail',
      }))
    }
  }

  render() {
    const {total, heads, tails, coin} = this.state
    const image =
      coin === 'head'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="h-t-heading">Heads (or) Tails</p>
          <img alt="toss result" className="img" src={image} />
          <button type="button" className="button" onClick={this.onClicked}>
            Toss Coin
          </button>
          <div className="result-container">
            <p>total:{total}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
