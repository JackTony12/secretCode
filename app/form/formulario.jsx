"use client"
import React from "react"
import { useState } from "react"
const Form = ({ questions }) => {
  const [userQuestion, setUserQuestion] = useState("")
  const [validations, setValidations] = useState(null)
  const [secretCode, setSecretCode] = useState("xxx")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (questions[0]?.answer === userQuestion) {
      setValidations("Correcto")
      setSecretCode("591")
    } else if (userQuestion !== "Si") {
      setValidations("Incorrecto")
    }
  }
  console.log(userQuestion)
  return (
    <>
      <div className='form'>
        <div className='svg_icon'>
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 512 512'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'></path>
          </svg>
        </div>
        <p>
          Para decifrar el codigo responda la siguiente pregunta correctamente
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor='questionInput'>{questions[0]?.ask}</label>
          <small>Escriba un 'Si' o 'No' para responder</small>
          <input
            value={userQuestion}
            type='text'
            id='questionInput'
            placeholder='Su respuesta aqui'
            name='userQuestion'
            onChange={(e) => setUserQuestion(e.target.value)}
          />
          <span
            className={`validation ${
              validations === "Correcto" ? "green" : "red"
            }`}
          >
            {validations}
          </span>
          <button type='submit'>Responder</button>
        </form>
        <p>Codigo secreto</p>
        <div className='secret_code'>{secretCode}</div>
      </div>
    </>
  )
}

export default Form
