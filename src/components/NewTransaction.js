// ========== IMPORTS ==========
import { useState } from 'react';
import { StyledForm } from '../styles';

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
                    <input 
                        onChange={handleChange}
                        value={formState.eventId}
                        name='eventId'
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
                <input className="hvr-grow" type='submit' value='Log Gift' />
            </StyledForm>
            <h1>--OR--</h1>
            <StyledForm>
                <input className="hvr-grow" type="submit" value="New Recipient" />
            </StyledForm>
        </div>
    )
}

// ========== EXPORT ==========
export default NewTransaction