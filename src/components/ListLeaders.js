import React from 'react'

export default class ListLeaders extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="uk-margin-top uk-child-width-1-1" uk-grid={"true"}>
        <div>
          <div uk-grid={"true"}>
              <div className="uk-width-expand" uk-leader={"true"}>Address</div>
              <div>{this.props.hash}</div>
          </div>
        </div>
        <div>
          <div uk-grid={"true"}>
              <div className="uk-width-expand" uk-leader={"true"}>Balance</div>
              <div>{this.props.balance}</div>
          </div>
        </div>
        <div>
          <div uk-grid={"true"}>
              <div className="uk-width-expand" uk-leader={"true"}>Transaction count</div>
              <div>{this.props.transactionCount}</div>
          </div>
        </div>
      </div>
    )
  }
}
