import React from 'react'
import InputText from '../InputText/InputText'
import TextArea from '../TextArea/TextArea'
import Button from '../Button/Button'

const Form = () => {
  return (
    <form>
        <h2>Formulario de Contacto:</h2>
        <InputText/>
        <InputText/>
        <TextArea/>
        <Button/>

    </form>
  )
}

export default Form