import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SuggestedEventEntry from './SuggestedEventEntry';

export default function SuggestedEventsList(props) {
    return (
        <div>
            <h2>Suggested Events on {props.daysOfWeekPreference.name}</h2>

            <Container>
                <Row>
                    {props.suggestedEvents
                        .map(data =>
                            <Col lg key={data.id}>
                                <SuggestedEventEntry
                                    data={data}
                                />
                            </Col>
                        )}
                </Row>
            </Container>
        </div>
    );
}