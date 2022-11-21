import './AddBook.css'
import { useContext, useState} from 'react'

// Components & Services
import Fields from '../Fields'
import { GetBookInfo } from '../../services/getBookInfo.service';

//Context & Hooks
import { GlobalContext } from '../../providers/GlobalContext/GlobalContext.provider';
import { useFormValidation } from '../../hooks/useFormValidation.hook';

// Interface & Utils
import { ISBN } from '../../utils/fields'
import { FieldProps, DefaultProps, GeneralObject } from '../../model/general.interface'

function AddBook() {
    const { AddBook: { title, form, ISBNSearch, skip } } = useContext(GlobalContext);
    const [loading, setLoading] = useState<boolean>(false)
    const [fullForm, setFullForm] = useState<boolean>(false)
    const { formError, setFormError, submitHandler } = useFormValidation()

    const fillFormCallback = async (formData: FormData) => {
        try {
            // TODO: Add User to DB
            setLoading(true)
            await console.log('SUP', formData)
        } catch(e) {
            console.log('eoo')
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
            required: false,
            "aria-label": field.label
        }, defaultprops)
        props.id = `add-book-${props.id}`
        return props
    }

    return (
        <div className='Add-Book'>
            <h2 className='App-Header'>{ title }</h2>
            {/* {fullForm ? (<p>sss</p>) : (<form
                className='Form-Wrapper'
                id="Sign-Up-Form"
                noValidate
                onSubmit={(evt) => submitHandler(evt, fillFormCallback)}
            >
                <Fields
                    label={form.isbn.label}
                    errorMsg={form.isbn.errorMsg}
                    props={getFieldProps(ISBN, form.isbn)}
                    initialValue={''}
                ></Fields>
                <input className='Form-Button' type="submit" value={ISBNSearch} />
                <button
                    className='Form-Link'
                    aria-label=''
                    onClick={() => setFullForm(true)}
                >{skip}</button>
            </form>)} */}
        </div>
    )
}

export default AddBook;