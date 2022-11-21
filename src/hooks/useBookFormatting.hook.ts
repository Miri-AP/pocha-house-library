import { SyntheticEvent, useState } from 'react'

export type ValidityStateErrors = 'valueMissing' | 'typeMismatch' | 'patternMismatch' | 'tooShort' | 'tooLong' | 'rangeUnderflow' | 'rangeOverflow' | 'stepMismatch' | 'badInput'
const SUPPORTED_INPUT_ERRORS :ValidityStateErrors[] = ['valueMissing', 'typeMismatch', 'patternMismatch', 'tooShort', 'tooLong', 'rangeUnderflow', 'rangeOverflow', 'stepMismatch', 'badInput']

export function useBookFormatting(errorMessages?: {[key in ValidityStateErrors]?: string}) {
  const [errorMessage, setErrorMessage] = useState<string>('')

  return {
    errorMessage,
    setErrorMessage,
  }
}