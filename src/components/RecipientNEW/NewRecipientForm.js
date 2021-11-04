// =======================================
//              IMPORTS
// =======================================
import { useState } from 'react'
import { StyledForm } from './styles'
import { StyledButton } from '../../styles'
import Modal from 'react-modal'

// =======================================
//       DEFINE the COMPONENT
// =======================================
const NewRecipientForm = (props) => {
    // ---------- Initialize State ----------
    const [ formState, setFormState ] = useState({          // set initial state to blank input fields
        name: '',
        birthday: '',
        age: '',
        gender: '',
    })

    // ---------- MODAL Helper Functions ----------
    Modal.setAppElement('#root')

    const [ modalIsOpen, setIsOpen ] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const afterOpenModal = () => {

    }

    const closeModal = () => {
        setIsOpen(false)
        setFormState({                                      // clear the form after submission
            name: '',
            birthday: '',
            age: '',
            gender: '',
        })
    }

    // =======================================
    //          FORM HELPER FUNCTIONS
    // =======================================
    const handleChange = event => {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();                             // prevent default form behavior
        props.createRecipient(formState);                   // call createTransaction to add form values to existing data
        closeModal()
        setFormState({                                      // clear the form after submission
            name: '',
            birthday: '',
            age: '',
            gender: '',
        })
    }

    // ----- RETURN some JSX -----
    return (
        <>
            <StyledButton onClick={openModal}>Add New Recipient</StyledButton>
            <Modal 
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
            >
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
                <button onClick={closeModal}>Cancel</button>
            </Modal>
        </>
    )
}

// =======================================
//       EXPORT the COMPONENT
// =======================================
export default NewRecipientForm