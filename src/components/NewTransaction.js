// ========== IMPORTS ==========
import { useState } from 'react';

// ========== DEFINE ==========
const NewTransaction = (props) => {
    // ----- Initialize State -----
    const [ formState, setFormState ] = useState({
        eventId: '',
        giftId: '',
        recipientId: '',
    })

    // ----- Form Helper Functions -----
    const handleChange = event => {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = event => {
        // prevent form default behavior
        event.preventDefault();
        // TODO: add user's uid to form
        // call createTransaction to add form values to existing data
        props.createTransaction(formState);
        // clear the form after it has been submitted
        setFormState({
            eventId: '',
            giftId: '',
            recipientId: '',
            date: '',
        })
    }

    // ----- RETURN some JSX -----
    return (
        <div className='newTransactionForm'>
            <h1>Log A New Gift</h1>
            <form onSubmit={handleSubmit}>
                <label>Event
                    <input 
                        onChange={handleChange}
                        value={formState.eventId}
                        name='eventId'
                        type='text'
                    />
                </label>
                <label>Recipient
                    <input 
                        onChange={handleChange}
                        value={formState.recipientId}
                        name='recipientId'
                        type='text'
                    />
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
                        type='text'
                    />
                </label>
                <input type='submit' value='Log Gift' />
            </form>
        </div>
    )
}

// ========== EXPORT ==========
export default NewTransaction