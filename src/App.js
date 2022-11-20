import React from 'react';
import axios from 'axios';

import './App.css';

//components
import { getConfig } from './components/Config';
import { selectRandomEvents } from './components/RandomEventsSelector';

//ui components
import SuggestedEventsList from './components/ui/suggested-events/SuggestedEventsList';

function App() {
    const [_eventsFromApi, setEventsFromApi] = React.useState([]);

    React.useEffect(() => {
        axios.get(getConfig().events_api_url)
            .then(function (response) {
                let eventsList = response.data.index;
                let selectedEvents = selectRandomEvents(eventsList, getConfig().max_suggested_events);

                setEventsFromApi(selectedEvents);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                Berlin Random Events
            </header>

            <SuggestedEventsList
                suggestedEvents={_eventsFromApi}
            />
        </div>
    );
}

export default App;
