export const listToArray = (list) => {
    let events = list
    const eventList = []
    while (events?.[0]?.[0]?.title) {
        eventList.push(events?.[0]?.[0]);
    console.log(list);

        events = events[0][1];
    }
    return eventList

}