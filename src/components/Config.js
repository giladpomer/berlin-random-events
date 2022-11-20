export function getConfig() {
    return {
        events_api_url: 'https://www.berlin.de/sen/web/service/maerkte-feste/wochen-troedelmaerkte/index.php/index/all.json?q=',
        max_suggested_events: 3,
        preferences: {
            days_of_week: [
                {
                    name: 'Weekdays',
                    days: ['Mo', 'Di', 'Mi', 'Do', 'Fr'],
                    description: 'Monday to Friday'
                },
                {
                    name: 'Weekends',
                    days: ['Sa', 'So'],
                    description: 'Saturday & Sunday'
                }
            ]
        }
    };
}