// =======================================
//              IMPORTS
// =======================================
import { useState } from 'react'

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
        likes: [],
        dislikes: [],
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
        props.createTransaction(formState);                 // call createTransaction to add form values to existing data
        setFormState({                                      // clear the form after submission
            name: '',
            birthday: '',
            age: '',
            gender: '',
            likes: [],
            dislikes: [],
        })
    }

    // ----- RETURN some JSX -----
    return (
        <h1>Pretend this is the new recipient form</h1>
    )
}

// =======================================
//       EXPORT the COMPONENT
// =======================================
export default NewRecipientForm