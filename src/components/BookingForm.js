import React, { useState } from 'react'

const BookingForm = (props) => {

    const[date,setDate] = useState("");
    const[time,setTime] = useState("");
    const[guest,setguest] = useState("");
    const[occassion,setOccassion] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.submitForm(e);

    }

    const handleChange = (e) =>{
        setDate(e);
        props.dispatch(e);
    }



  return (
    <header className='formPage' >
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset className='formField'>
                    
                    <div>
                        <label htmlFor='book-date'>Choose a date</label>
                        <input id='book-date' value={date} onChange={(e) =>{handleChange(e.target.value)}}
                        type='date' required/>
                    </div>

                    <div>
                        <label htmlFor='book-time'>Choose a Time:</label>
                        <select id='book-time' value={time} onChange={(e) => setTime(e.target.value)} required>
                        <option value="" >select a Time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes =>{
                                    return(
                                        <option key={availableTimes}>{availableTimes}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div>
                        <label htmlFor='book-guest'>Number of guests</label>
                            <input id='book-guest' value={guest} min={1} max={10} onChange={(e) => setguest(e.target.value)} placeholder='0' type={'number'} required/>
                    </div>

                    <div>
                        <label htmlFor='book-occassion'>Occassion</label>
                        <select id='book-occassion' key={occassion} value={occassion} onChange={(e) => setOccassion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Casual Dining</option>
                        </select>
                    </div>

                    <div className='btnReceive'>
                        <input type='Submit' aria-label='On Click' value={"Reserve"} />
                    </div>
                </fieldset>
            </form>
        </section>
    </header>
  )
}

export default BookingForm;