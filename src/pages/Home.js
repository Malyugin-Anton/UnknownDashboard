import React from 'react'
import UIkit from 'uikit'
import Web3 from 'web3'

import api from '../api'

import ListLeaders from '../components/ListLeaders'
import FormSearch from '../components/FormSearch'
import PageTemplate from './PageTemplate'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: "",
      balance: "",
      transactionCount: "",
      isError: false
    }
  }

  getBalance = async (hash) => {
    try {
      const balance = await api.getBalance(hash)
      this.setState({
        balance: Web3.utils.fromWei(balance, "ether"),
        isError: false
      })
    } catch (e) {
      console.log("Ошибка");
      this.setState({
        isError: true
      })
      return e
    }
  }

  getTransactionCount = async (hash) => {
    try {
      const transactionCount = await api.getTransactionCount(hash)
      this.setState({
        transactionCount: transactionCount,
        isError: false
      })
    } catch (e) {
      console.log("Ошибка");
      this.setState({
        isError: true
      })
      return e
    }
  }

  changeHash = async (hash) => {
    this.setState({
      hash: hash
    })
    await this.getBalance(hash);
    await this.getTransactionCount(hash);
  }

  render() {
    const { changeHash } = this

    return (
      <PageTemplate>
        <div className="uk-section uk-section-default">
          <div className="uk-container">
            <FormSearch onNewHash={changeHash}/>
            {(!this.state.isError && this.state.hash !== '') ? <ListLeaders {...this.state}/> : null}
            {
              (this.state.isError) ?
                <div className="uk-alert-danger" uk-alert={"true"}>
                    <a className="uk-alert-close" uk-close={"true"}></a>
                    <p>Значение некорректно</p>
                </div> : null
            }

          </div>
        </div>
      </PageTemplate>
    )
  }
}
