export function selectRandomEvents(eventsList, maxEventsCount) {
    let eventsPool = [...eventsList];
    let selectedEventsList = [];

    for (var i = 0; i < maxEventsCount && eventsPool.length > 0; i++) {
        let randomIndexInPool = getRandomInteger(eventsPool.length);
        let selectedEvent = eventsPool[randomIndexInPool];
        selectedEventsList.push(selectedEvent);

        //remove selected event from pool (to avoid showing the same event twice)
        eventsPool = eventsPool.filter(item => item !== selectedEvent);
    }

    return selectedEventsList;
}

function getRandomInteger(maxInteger) {
    return Math.floor(Math.random() * maxInteger);
}