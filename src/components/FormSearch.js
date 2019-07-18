import React from 'react'

const FormSearch = ({onNewHash = f => f}) => {
  let _text, placeholder = '0x...'

  const submit = (e) => {
    e.preventDefault()
    onNewHash(_text.value)
  }

  return (
    <form onSubmit={submit}>
      <input ref={ input => _text = input } className="uk-input uk-form-width-large" type="text" placeholder={placeholder} />
      <button className="uk-button uk-button-default">search</button>
    </form>
  )
}

export default FormSearch
