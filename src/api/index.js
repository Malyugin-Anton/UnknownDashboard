import Web3 from 'web3'
const web3 = new Web3(Web3.givenProvider)

function getBalance(hash) {
  return web3.eth.getBalance(hash);
}

function getTransactionCount(hash) {
  return web3.eth.getTransactionCount(hash)
}

export default {
  getBalance,
  getTransactionCount
}
