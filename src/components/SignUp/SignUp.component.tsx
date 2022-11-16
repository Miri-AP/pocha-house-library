import './SignUp.css'
import { useContext, useState} from 'react'

import Fields from '../Fields'
import { GlobalContext } from '../../providers/GlobalContext/GlobalContext.provider';
import { useFormValidation } from '../../hooks/useFormValidation.hook';

import { FieldProps, DefaultProps, GeneralObject, SignUpPayload} from '../../model/general.interface'
import { NAME, EMAIL, PHONE } from '../../utils/fieldProps'


function SignUp() {
    const { SignUp: { title, description, form } } = useContext(GlobalContext);
    const [loading, setLoading] = useState<boolean>(false)
    const { formError, setFormError, submitHandler } = useFormValidation()

    const submitCallback = async (formData: FormData) => {
    const payload : SignUpPayload = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
    }

    try {
      // TODO: redirect to recommendations page pending page creation
      setLoading(true)
      await console.log(payload)
    } catch(e) {
        console.log('eoo')
        setFormError(true)
    } finally {
        console.log('finally', formError)
        setLoading(false)
    }
  }

    const getFieldProps = (defaultprops :DefaultProps, field : GeneralObject) :FieldProps => {
        const props :FieldProps = Object.assign({
            label: field.label,
            placeholder: field.placeholder,
            required: !!field?.required
        }, defaultprops)

        return props
    }

    
    return (
        <>
            <h2 className='App-Header'>{ title }</h2>
            <p className='App-Description'>{ description }</p>
            <p>{loading} errors: {formError}</p>
            <form
                className='Form-Wrapper'
                noValidate
                onSubmit={(evt) => submitHandler(evt, submitCallback)}
            >
                {formError && (
                <p className="Field-Error" aria-live="assertive">
                    Algo salió mal, vuelve a intentarlo.
                </p>
                )}
                <Fields
                    label={form.name.label}
                    errorMsg={form.name.errorMsg}
                    props={getFieldProps(NAME, form.name)}
                    initialValue={''}
                ></Fields>
                <Fields
                    label={form.email.label}
                    errorMsg={form.email.errorMsg}
                    props={getFieldProps(EMAIL, form.email)}
                    initialValue={''}
                ></Fields>
                <Fields
                    label={form.phone.label}
                    errorMsg={form.phone.errorMsg}
                    props={getFieldProps(PHONE, form.phone)}
                    initialValue={''}
                ></Fields>
                <input className='Form-Button' type="submit" value="Submit" />
             </form>
        </>
    )
}

export default SignUp;