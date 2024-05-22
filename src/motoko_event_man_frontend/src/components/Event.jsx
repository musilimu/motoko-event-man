import React, { useState } from "react"
import { flatten } from "../utils/flatten";
import { motoko_event_man_backend } from 'declarations/motoko_event_man_backend';
import Button from '../components/Button'

export const Event = ({ event }) => {
    const [isBooked, setIsbooked] = useState(flatten(event.tickets).includes(event.id))
    const [isDeleted, setIsDeleted] = useState(false)
    const id = (_id) => _id.toString().replace('n', '')
    return !isDeleted && (<div className={`${isBooked ? 'bg-fuchsia-200' : 'bg-fuchsia-950 text-fuchsia-50'} p-4 grid gap-3 rounded-sm`}>
        <p>Event Name: {event.title}</p>
        <p>Location: {event.location}</p>

        <Button onClick={() => motoko_event_man_backend.bookEventTicket(id(event.id)).then(res => {
            setIsbooked(res)
        })}>{!isBooked ? "book ticket now" : "cancel this ticket"}</Button>
        <Button onClick={() => motoko_event_man_backend.deleteEvent(id(event.id)).then(res => {
            setIsDeleted(res)
        })}>delete</Button>
    </div>)
}