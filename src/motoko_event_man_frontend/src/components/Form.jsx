import React, { useState } from 'react'
import TextBox from './TextBox'
import Button from './Button'
import { motoko_event_man_backend } from 'declarations/motoko_event_man_backend';

const Form = ({ title }) => {
    const [eventTitle, setTitle] = useState('')
    const [eventLocation, setLocation] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        motoko_event_man_backend.createEvent(eventTitle, eventLocation).then(res => {
            console.log(res);
        })
    }

    return (
        <form
            className="grid space-y-4 max-w-xl my-8"
            onSubmit={onSubmit}
        >
            <h1 className="font-bold text-lg text-center my-4">{title}</h1>
            <TextBox defaultValue={eventTitle} onChange={e => setTitle(e.target.value)} placeholder="Name of event" />
            <TextBox defaultValue={eventLocation} onChange={e => setLocation(e.target.value)} placeholder="event location" />
            <Button>Add event</Button>
        </form>
    )
}

export default Form
