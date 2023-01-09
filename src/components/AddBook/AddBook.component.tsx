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
import PrefilledBookInfo from '../../model/PrefilledBookInfo.class';

interface prefilledValues {
  pochaID: string
  copies: string
  isbn10: string
  isbn13: string
  title: string
  author: string
  publishingYear: string
  publishingHouse: string
  language: string
  genres: string[]
  description: string
  pages: string
}
function AddBook() {
  const { AddBook: { title, form, ISBNSearch, skip } } = useContext(GlobalContext);
  const [loading, setLoading] = useState<boolean>(false)
  const [fullForm, setFullForm] = useState<boolean>(false)
  const { formError, setFormError, submitHandler } = useFormValidation()
  const [prefilled, setprefilled] = useState<prefilledValues>({
    pochaID: "",
    copies: "",
    isbn10: "",
    isbn13: "",
    title: "",
    author: "",
    publishingYear: "",
    publishingHouse: "",
    language: "",
    genres: [],
    description: "",
    pages: ""
  })

  const fillFormCallback = async (formData: FormData) => {
    const ISBNCode: string = formData.get('add-book-ISBN') as string || ''
    setFormError(false)

    if (!ISBNCode) {
      console.log()
      setFormError(true)
      return
    }

    try {
      setLoading(true)
      const data = await GetMoreOpenLibraryInfo(ISBNCode)
      setprefilled(data)
      console.log('book data: ', data)
    } catch (e) { setFormError(true) }
    finally { setLoading(false) }
  }

  const getFieldProps = (defaultprops: DefaultProps, field: GeneralObject): FieldProps => {
    const props: FieldProps = Object.assign({
      label: field.label,
      placeholder: field.placeholder,
      required: !!field.required,
      "aria-label": field.label,
      id: `add-book-${defaultprops.name}`
    }, defaultprops)
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
        )}
        <Fields
          label={form.isbn.label}
          errorMsg={form.isbn.errorMsg}
          props={getFieldProps(ISBN, form.isbn)}
          initialValue={''}
        ></Fields>
        <input className='Form-Button' type="submit" value={ISBNSearch} />
        <Fields
          label="Book Title"
          props={getFieldProps(ISBN, form.isbn)}
          initialValue={prefilled ?.title}
        ></Fields>
        <Fields
          label="Book Author"
          props={getFieldProps(ISBN, form.isbn)}
          initialValue={prefilled ?.author}
        ></Fields>
        <button
          className='Form-Link'
          aria-label='Add co-author'

        >+ Add co-author</button>
        <button
          className='Form-Link'
          aria-label='Add co-author'

        >+ Add Illustrator</button>
        <textarea
          id="description"
          name="description"
          rows={4}
          cols={50}
        >
          If possible add a book description.
        </textarea>
        <select name="language" id="language">
          <option value="">--Please choose a language option--</option>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="spanglish">Spanglish</option>
          <option value="french">French</option>
        </select>
        <button
          className='Form-Link'
          aria-label='Add co-author'

        >+ add another language</button>
        <select name="language" id="language">
          <option value="">--Please choose the book format--</option>
          <option value="hardcover">Hardcover</option>
          <option value="paperback">Paper back</option>
          <option value="photocopy">Photo copy</option>
          <option value="ebook">E-book</option>
        </select>
        <select name="condition" id="condition">
          <option value="">--Please choose the book condition--</option>
          <option value="hardcover">Brand new</option>
          <option value="paperback">Like new</option>
          <option value="photocopy">Very good</option>
          <option value="ebook">Acceptable</option>
        </select>
        <textarea id="condition-text" name="condition-text" rows={4} cols={50}>
          If neccesary specify the condition of the book when being donated
        </textarea>
        <Fields
          label="Book Series"
          props={getFieldProps(ISBN, form.isbn)}
          initialValue={prefilled ?.author}
        ></Fields>
        <Fields
          label="Number in Series"
          props={getFieldProps(ISBN, form.isbn)}
          initialValue={prefilled ?.author}
        ></Fields>
        <button
          className='Form-Link'
          aria-label=''
          onClick={() => setFullForm(true)}
        >{skip}</button>
      </form>)}
      <h2 className='App-Header'>Agrega la info del Donador</h2>
      <form
        className='Form-Wrapper'
        id="Prefill-Form"
        noValidate
      >
        <Fields
          label="Donar Name"
          props={getFieldProps(ISBN, form.isbn)}
          initialValue={prefilled ?.author}
        ></Fields>
        <Fields
          label="Phone Number"
          props={getFieldProps(ISBN, form.isbn)}
          initialValue={prefilled ?.author}
        ></Fields>
        <Fields
          label="E-mail"
          props={getFieldProps(ISBN, form.isbn)}
          initialValue={prefilled ?.author}
        ></Fields>
      </form>
    </div>
  )
}

export default AddBook;
