import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function DaysOfWeekEntry(props) {
    function onClick() {
        props.onDaysOfWeekSelected(props.data);
    }

    return (
        <Card style={{ width: '18rem' }} className="days-of-week-entry">
            <Card.Body>
                <Card.Title>{props.data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.data.description}</Card.Subtitle>
                <Button variant="primary" onClick={onClick}>Select</Button>
            </Card.Body>
        </Card>
    );
}