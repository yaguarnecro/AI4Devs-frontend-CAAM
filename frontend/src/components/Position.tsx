import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

type Candidate = {
    fullName: string;
    currentInterviewStep: string;
    averageScore: number;
};

const Position: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get the position ID from the URL
    const positionId = id ? parseInt(id) : NaN; // Convert to number, handle undefined
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [interviewFlow, setInterviewFlow] = useState<any>(null);

    useEffect(() => {
        if (!isNaN(positionId)) { // Check if positionId is a valid number
            console.log(`Fetching candidates for position ID: ${positionId}`);
            fetch(`/positions/${positionId}/candidates`)
                .then(response => {
                    if (!response.ok) {
                        return response.text().then(text => { throw new Error(`Error: ${response.status} - ${text}`); });
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Candidates data:', data);
                    setCandidates(data);
                })
                .catch(error => console.error('Error fetching candidates:', error));

            fetch(`/positions/${positionId}/interviewflow`)
                .then(response => {
                    if (!response.ok) {
                        return response.text().then(text => { throw new Error(`Error: ${response.status} - ${text}`); });
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Interview flow data:', data);
                    setInterviewFlow(data.interviewFlow);
                })
                .catch(error => console.error('Error fetching interview flow:', error));
        }
    }, [positionId]); // Add positionId as a dependency

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Position Details</h2>
            <Row>
                {interviewFlow?.interviewSteps.map((step: any) => (
                    <Col key={step.id} md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>{step.name}</Card.Title>
                                <div>
                                    {candidates.filter(candidate => candidate.currentInterviewStep === step.name).map((candidate, index) => (
                                        <div key={index}>
                                            <p>{candidate.fullName} - Score: {candidate.averageScore}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Position;
