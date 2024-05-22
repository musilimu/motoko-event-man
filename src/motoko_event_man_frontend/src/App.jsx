import { useEffect, useState } from 'react';
import React from 'react';
import { getEvents } from './hooks/getEvents'
import { Event } from './components/Event';
import Form from './components/Form'

function App() {
	const [events, setEvents] = useState([])
	useEffect(() => {

		getEvents().then(data => {
			// console.log(data);
			setEvents(data);
		})
	}, [])


	return (
		<div className='container mx-auto mt-8'>
			<Form title="Register your event" />
			<h1 className='text-3xl text-fuchsia-950 font-bold'>Event Ticket Manager</h1>

			<main className='grid gap-4 grid-cols-3 mt-4'>
				{events.map(event => {
					console.log(event)
					// @ts-ignore
					return <Event key={event.title} event={event} />
				})}
			</main>
		</div>
	);
}

export default App;
