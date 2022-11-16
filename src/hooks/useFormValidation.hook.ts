/* eslint-disable @typescript-eslint/no-empty-function */
import { SyntheticEvent, useState } from 'react'

export function useFormValidation(nativeReportValidity = true) {
  const [formError, setFormError] = useState<boolean>(false)

  /**
   * Will validate form and send values to callback or trigger native validation,
   * will also blur inputs to use native validation
   * @param evt represents the Submitevent that is triggered by the form
   * @param callback function that will receive the form data if valid
   */
  const submitHandler = (
    evt: SyntheticEvent<HTMLFormElement>,
    callback: (formData:FormData) => void = () => {}
  ) => {
    evt.preventDefault()

     if (evt.currentTarget.checkValidity()) {
      callback(new FormData(evt.target as HTMLFormElement))
    } else {
      const {elements}  = evt.target as HTMLFormElement
      for (let i= 0; i < elements.length; i++) {
        if(elements[i].tagName === 'INPUT') {
          (elements[i] as HTMLInputElement).blur()
        }
      }
      if(nativeReportValidity) evt.currentTarget.reportValidity()
    }
  }

  return {
    formError,
    setFormError,
    submitHandler
  }
}