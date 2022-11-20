import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DaysOfWeekEntry from './DaysOfWeekEntry';

export default function DaysOfWeekSelector(props) {
    return (
        <div>
            <h2>When?</h2>

            <Container>
                <Row>
                    {props.configOptions
                        .map(optionData =>
                            <Col md key={optionData.name}>
                                <DaysOfWeekEntry
                                    data={optionData}
                                    onDaysOfWeekSelected={props.onDaysOfWeekSelected}
                                />
                            </Col>
                        )}
                </Row>
            </Container>
        </div>
    );
}