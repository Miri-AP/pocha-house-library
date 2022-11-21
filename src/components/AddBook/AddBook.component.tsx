import './AddBook.css';
import { useContext, useState } from 'react';

// Components & Services
import Fields from '../Fields';
import { GetMoreOpenLibraryInfo } from '../../services/getBookInfo.service';

//Context & Hooks
import { GlobalContext } from '../../providers/GlobalContext/GlobalContext.provider';
import { useFormValidation } from '../../hooks/useFormValidation.hook';

// Interface & Utils
import { ISBN } from '../../utils/fields';
import { FieldProps, DefaultProps, GeneralObject } from '../../model/general.interface';
import { BookForm } from '../../model/book.class';

function AddBook() {
    const { AddBook: { title, form, ISBNSearch, skip } } = useContext(GlobalContext);
    const [loading, setLoading] = useState<boolean>(false)
    const [fullForm, setFullForm] = useState<boolean>(false)
    const { formError, setFormError, submitHandler } = useFormValidation()
    const [prefilled, setprefilled] = useState({})

    const fillFormCallback = async (formData: FormData) => {
        const ISBNCode: string = formData.get('add-book-ISBN') as string || ''
        setFormError(false)

        if (!ISBNCode) {
            setFormError(true)
            return
        }

        try {
            setLoading(true)
            const data = await GetMoreOpenLibraryInfo(ISBNCode)
            const bookDta = new BookForm(data, ISBNCode)
            setprefilled(bookDta)
            console.log('book data: ', bookDta)
        } catch (e) { setFormError(true) }
        finally { setLoading(false) }
    }
    const getFieldProps = (defaultprops: DefaultProps, field: GeneralObject): FieldProps => {
        const props: FieldProps = Object.assign({
            label: field.label,
            placeholder: field.placeholder,
            required: false,
            "aria-label": field.label
        }, defaultprops)
        props.id = `add-book-${props.name}`
        props.name = props.id
        return props
    }

    return (
        <div className='Add-Book'>
            <h2 className='App-Header'>{title}</h2>
            {loading ? 's' : 'j'} loaded or not
            {fullForm ? (<p>sss</p>) : (<form
                className='Form-Wrapper'
                id="Prefill-Form"
                noValidate
                onSubmit={(evt) => submitHandler(evt, fillFormCallback)}
            >
                {formError && (
                    <p className="Field-Error" aria-live="assertive">
                        Debes ingresar un ISBN valido o darle click a "Llenar Manualmente".
                    </p>
                )}                <Fields
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
            </form>)}
            <form action="">
                
            </form>
        </div>
    )
}

export default AddBook;