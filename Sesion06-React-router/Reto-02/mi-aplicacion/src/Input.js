import React from 'react'

const buttonMessageOriginal = 'Guardar mensaje'
const random = () => Math.floor(Math.random() * (1000 - 1)) + 1;

function Input(props) {
  const [message, setMessage] = React.useState('')
  const [buttonMessage, setButtonMessage] = React.useState(buttonMessageOriginal)

  return (
    <>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Escribe aquí..."
      />
        <button>
          {buttonMessage}
        </button>
    </>
  )
}

export default Input
