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
const NewTransactionForm = (props) => {
    // ----- Initialize State -----
    const [ formState, setFormState ] = useState({          // set initial state to blank input fields
        eventId: '',
        giftId: '',
        recipientId: '',
        date: '',
    })

    // ----- MODAL -----
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
            eventId: '',
            giftId: '',
            recipientId: '',
            date: '',
        })
    }

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
        closeModal()
        setFormState({                                      // clear the form after submission
            eventId: '',
            giftId: '',
            recipientId: '',
            date: '',
        })
    }

    // ----- RETURN some JSX -----
    return (
        <>
            <StyledButton onClick={openModal}>Log New Gift</StyledButton>
                <Modal 
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                >
                    <StyledForm onSubmit={handleSubmit}>
                        <label>Recipient
                            <select name="recipientId" value={formState.recipientId} onChange={handleChange}>
                                <option key="">Select a Recipient</option>
                                {
                                    props.recipients.map((r, index) => {
                                        return(
                                            <option key={index} value={r._id}>{r.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </label>
                        <label>Event
                            <select name="eventId" value={formState.eventId} onChange={handleChange}>
                                <option key="">Select an Event</option>
                                {
                                    props.events.map((e, index) => {
                                        return (
                                            <option key={index} value={e._id}>{e.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </label>
                        <label>Gift
                            <input 
                                onChange={handleChange}
                                value={formState.giftId}
                                name='giftId'
                                type='text'
                            />
                        </label>
                        <label>Date
                            <input 
                                onChange={handleChange}
                                value={formState.date}
                                name='date'
                                type='date'
                            />
                        </label>
                        <input className="hvr-grow" type='submit' value='Log Gift'/>
                    </StyledForm>
                    <button onClick={closeModal}>Cancel</button>
                </Modal>
        </>
    )
}

// =======================================
//       EXPORT the COMPONENT
// =======================================
export default NewTransactionForm