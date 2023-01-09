// import './SignUp.css'
import { useContext, useState} from 'react'

// Components
import Fields from '../Fields'

//Context & Hooks
import { GlobalContext } from '../../providers/GlobalContext/GlobalContext.provider';
import { useFormValidation } from '../../hooks/useFormValidation.hook';

// Interface & Utils
import { FieldProps, DefaultProps, GeneralObject, SignUpPayload} from '../../model/general.interface'
import { NAME, EMAIL, PHONE } from '../../utils/fields'


function SignUp() {
    const { SignUp: { title, description, form, formSubmit } } = useContext(GlobalContext);
    const [loading, setLoading] = useState<boolean>(false)
    const { formError, setFormError, submitHandler } = useFormValidation()

    const submitCallback = (formData: FormData) => {
    const payload : SignUpPayload = {
        name: formData.get('sign-up-name') as string,
        email: formData.get('sign-up-email') as string,
        phone: formData.get('sign-up-phone') as string,
    }

    try {
      // TODO: Add User to DB
      setLoading(true)
      console.log(payload, formData.get('sign-up-name'))
    } catch(e) {
        setFormError(true)
    } finally {
        console.log('finally')
        setLoading(false)
    }
  }

    const getFieldProps = (defaultprops :DefaultProps, field : GeneralObject) :FieldProps => {
        const props :FieldProps = Object.assign({
            label: field.label,
            placeholder: field.placeholder,
            required: !!field?.required,
            id: `sign-up-${field.name}`
        }, defaultprops)
         props.name = props.id
        return props
    }

    
    return (
        <>
            <h2 className='App-Header'>{ title }</h2>
            <p className='App-Description'>{ description }</p>
            <p>{loading} errors: {formError}</p>
            <form
                className='Form-Wrapper'
                id='sign-up-form'
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
                <input className='Form-Button' type="submit" value={formSubmit} />
             </form>
        </>
    )
}

export default SignUp;