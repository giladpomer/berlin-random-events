export function filterEventsByPreferences(events, daysOfWeekPreference) {
    return events.filter(eventData => isEventMatchingDaysOfWeekPreference(eventData, daysOfWeekPreference));
}

function isEventMatchingDaysOfWeekPreference(eventData, daysOfWeekPreference) {
    let eventDays = eventData.tage.split(', ');

    for (var i = 0; i < eventDays.length; i++) {
        let eventDay = eventDays[i];

        if (daysOfWeekPreference.days.indexOf(eventDay) !== -1) {
            return true;
        }
    }

    return false;
}