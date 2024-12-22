import React from "react"
import Form from "../form/formulario"
const FirstCode = () => {
  const questions = [
    {
      ask: "Antony la ama mas si o no? ",
      answer: "Si",
    },
  ]
  return <Form questions={questions} />
}

export default FirstCode
