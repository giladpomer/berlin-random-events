import React from 'react';
import axios from 'axios';

import './App.css';

//components
import { getConfig } from './components/Config';
import { selectRandomEvents } from './components/RandomEventsSelector';
import { filterEventsByPreferences } from './components/PreferencesFilter';

//ui components
import Preferences from './components/ui/preferences/Preferences';
import SuggestedEventsList from './components/ui/suggested-events/SuggestedEventsList';

function App() {
    const [_eventsFromApi, setEventsFromApi] = React.useState([]);

    const [_isAllPreferencesSelected, setIsAllPreferencesSelected] = React.useState(false);
    const [_daysOfWeekPreference, setDaysOfWeekPreference] = React.useState(null);

    const [_suggestedEvents, setSuggestedEvents] = React.useState([]);

    function onDaysOfWeekSelected(optionData) {
        setDaysOfWeekPreference(optionData);

        setIsAllPreferencesSelected(true);
    }

    React.useEffect(() => {
        axios.get(getConfig().events_api_url)
            .then(function (response) {
                let eventsList = response.data.index;
                setEventsFromApi(eventsList);
            });
    }, []);

    React.useEffect(() => {
        if (!_daysOfWeekPreference) {
            return;
        }

        let matchingEvents = filterEventsByPreferences(_eventsFromApi, _daysOfWeekPreference);

        let selectedEvents = selectRandomEvents(matchingEvents, getConfig().max_suggested_events);
        setSuggestedEvents(selectedEvents);
    }, [_eventsFromApi, _daysOfWeekPreference]);

    return (
        <div className="App">
            <header className="App-header">
                Berlin Random Events
            </header>

            {!_isAllPreferencesSelected &&
                <Preferences
                    config={getConfig().preferences}
                    onDaysOfWeekSelected={onDaysOfWeekSelected}
                />
            }

            {_isAllPreferencesSelected &&
                <SuggestedEventsList
                    suggestedEvents={_suggestedEvents}
                    daysOfWeekPreference={_daysOfWeekPreference}
                />
            }
        </div>
    );
}

export default App;
