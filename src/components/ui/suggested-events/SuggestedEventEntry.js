import Card from 'react-bootstrap/Card';

export default function SuggestedEventEntry(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.data.bezeichnung}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.data.bezirk}</Card.Subtitle>
                <Card.Text>
                    {'Days: ' + props.data.tage}
                    <br />
                    {'Times: ' + props.data.zeiten}
                    <br />

                    {'Address: ' + props.data.strasse + ', ' + props.data.plz}
                </Card.Text>
                <Card.Link href={props.data.www} >More Details</Card.Link>
            </Card.Body>
        </Card>
    );
}