import './Fields.css'
import { FC, useEffect, useState, ChangeEvent, InputHTMLAttributes } from 'react';
import { useInputValidation, ValidityStateErrors } from '../../hooks/useInputValidation.hook';
import { FieldProps } from '../../model/general.interface'

type excludedProps = 'className' | 'onBlur' | 'onFocus' | 'onInput'
interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, excludedProps> {
  initialValue?: string
  label: string
  props: FieldProps
  errorMsg?: {
    typeMismatch: string
    valueMissing: string
  }
}

const Fields :FC<Props> = ({label, props, errorMsg, initialValue = '', onChange }) => {
  const [touched, setTouched] = useState(false)
  const [value, setValue] = useState('')

  const {
    errorMessage,
    setErrorMessage,
    validateOnFocusEvent
  } = useInputValidation(errorMsg)

  const changeHandler = (e : ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if(onChange) {
      onChange(e)
    }
    setErrorMessage('')
  }

  useEffect(() => {
    setValue(initialValue ?? '')
  }, [initialValue])

    return (
        <div className='Field-Wrapper'>
            <p className='Field-Label'>{label}</p>
            <input
                className='Field-Input'
                {...props}
                value={value}
                data-touched={touched}
                onChange={changeHandler}
                onBlur={validateOnFocusEvent}
                onFocus={() => {
                  setTouched(true)
                  setErrorMessage('')
                }}
            />
            <p className='Field-Error'> {errorMessage} </p>
        </div>
    )
}

export default Fields;