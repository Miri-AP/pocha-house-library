import { SyntheticEvent, useState } from 'react'

export type ValidityStateErrors = 'valueMissing' | 'typeMismatch' | 'patternMismatch' | 'tooShort' | 'tooLong' | 'rangeUnderflow' | 'rangeOverflow' | 'stepMismatch' | 'badInput'
const SUPPORTED_INPUT_ERRORS :ValidityStateErrors[] = ['valueMissing', 'typeMismatch', 'patternMismatch', 'tooShort', 'tooLong', 'rangeUnderflow', 'rangeOverflow', 'stepMismatch', 'badInput']

export function useInputValidation(errorMessages?: {[key in ValidityStateErrors]?: string}) {
  const [errorMessage, setErrorMessage] = useState<string>('')

  const validateOnFocusEvent = (evt: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement, FocusEvent>) => {
    const {valid} = evt.currentTarget.validity

    if (!valid) {
      if(!errorMessages) return

      const firstError = SUPPORTED_INPUT_ERRORS.find((key) => {
        return evt.currentTarget.validity[key] && errorMessages[key]
      })

      if (firstError) {
        setErrorMessage(errorMessages[firstError] ?? '')
      }
      console.log('firstError', firstError)
    }
    console.log('message: ', errorMessages);
  }

  return {
    errorMessage,
    setErrorMessage,
    validateOnFocusEvent
  }
}