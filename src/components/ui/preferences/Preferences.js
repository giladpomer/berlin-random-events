import DaysOfWeekSelector from './days-of-week/DaysOfWeekSelector';

export default function Preferences(props) {
    return <DaysOfWeekSelector
        configOptions={props.config.days_of_week}
        onDaysOfWeekSelected={props.onDaysOfWeekSelected}
    />;
}