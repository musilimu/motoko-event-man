import { motoko_event_man_backend } from 'declarations/motoko_event_man_backend';
import { listToArray } from "../utils/toArray";

export const getEvents = () => {
	return new Promise((res) => {
		motoko_event_man_backend.getEvents().then((eventsData) => {
			console.log(eventsData);
			res(listToArray(eventsData))
		});

	})
}