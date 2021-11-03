// =======================================
//              IMPORTS
// =======================================
import { useState } from 'react'
import { StyledForm } from './styles'


// =======================================
//       DEFINE the COMPONENT
// =======================================
const NewTransactionForm = (props) => {
    console.log(props)
    // ----- Initialize State -----
    const [ formState, setFormState ] = useState({          // set initial state to blank input fields
        eventId: '',
        giftId: '',
        recipientId: '',
        date: '',
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
            eventId: '',
            giftId: '',
            recipientId: '',
            date: '',
        })
    }

    // ----- RETURN some JSX -----
    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <label>Recipient
                    <input 
                        onChange={handleChange}
                        value={formState.recipientId}
                        name='recipientId'
                        type='text'
                    />
                </label>
                <label>Event
                    <select name="eventId" value={formState.eventId} onChange={handleChange}>
                        <option>Select an Event</option>
                        {
                            props.events.map((e) => {
                                return (
                                    <option value={e._id}>{e.name}</option>
                                    // <input 
                                    // onChange={handleChange}
                                    // value={formState.eventId}
                                    // name='eventId'
                                    // type='text'
                                    // />
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
                <input className="hvr-grow" type='submit' value='Log Gift' />
            </StyledForm>
        </>
    )
}

// =======================================
//       EXPORT the COMPONENT
// =======================================
export default NewTransactionForm