// =======================================
//              IMPORTS
// =======================================
import { useState } from 'react'
import { StyledForm } from './styles'

// =======================================
//       DEFINE the COMPONENT
// =======================================
const NewRecipientForm = (props) => {
    console.log(props)
    // ----- Initialize State -----
    const [ formState, setFormState ] = useState({          // set initial state to blank input fields
        name: '',
        birthday: '',
        age: '',
        gender: '',
    })

    // =======================================
    //          FORM HELPER FUNCTIONS
    // =======================================
    // ----- Handle Change on Form -----
    const handleChange = event => {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    // ----- Handle Submit on Form -----
    const handleSubmit = event => {
        event.preventDefault();                             // prevent default form behavior
        props.createRecipient(formState);                 // call createTransaction to add form values to existing data
        setFormState({                                      // clear the form after submission
            name: '',
            birthday: '',
            age: '',
            gender: '',
        })
    }

    // ----- RETURN some JSX -----
    return (
        <StyledForm onSubmit={handleSubmit}>
            <label>Name
                <input 
                    onChange={handleChange}
                    value={formState.name}
                    name='name'
                    type='text'
                />
            </label>
            <label>Birthday
                <input 
                    onChange={handleChange}
                    value={formState.birthday}
                    name='birthday'
                    type='date'
                />
            </label>
            <label>Age
                <input 
                    onChange={handleChange}
                    value={formState.age}
                    name='age'
                    type='number'
                />
            </label>
            <label>Gender
                <input 
                    onChange={handleChange}
                    value={formState.gender}
                    name='gender'
                    type='text'
                />
            </label>
            <input className="hvr-grow" type='submit' value='Add New Recipient' />
        </StyledForm>
    )
}

// =======================================
//       EXPORT the COMPONENT
// =======================================
export default NewRecipientForm