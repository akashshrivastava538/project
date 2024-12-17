import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CveDetailsPage = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCveDetails = async () => {
            // Hardcoded details
            const fixedDetails = {
                id: "CVE-1999-0095",
                description: "The debug command in Sendmail is enabled, allowing attackers to execute commands as root.",
                severity: "LOW",
                score: 0,
                vectorString: "AV:N/AC:L/Au:N/C:C/I:C/A:C",
                accessVector: "NETWORK",
                accessComplexity: "LOW",
                authentication: "NONE",
                confidentialityImpact: "PARTIAL",
                integrityImpact: "PARTIAL",
                availabilityImpact: "NONE",
                exploitabilityScore: 0,
                impactScore: 0,
                cpe: [
                    {
                        criteria: "cpe:2.3:a:default:example:*:*:*:*:*:*:*:*",
                        matchCriteriaId: "1234-5678-DEFAULT",
                        vulnerable: "Yes",
                    }
                ],
                publishedDate: "16 Dec 1999",
                lastModifiedDate: "17 Oct 2022"
            };
            setDetails(fixedDetails);
            setLoading(false);
        };

        fetchCveDetails();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!details) return <p>No details available for this CVE.</p>;

    return (
        <div>
            <h1>{details.id}</h1>
            <p><strong>Description:</strong> {details.description}</p>

            <h2>CVSS V2 Metrics:</h2>
            <ul>
                <li><strong>Severity:</strong> {details.severity}</li>
                <li><strong>Score:</strong> {details.score}</li>
                <li><strong>Vector String:</strong> {"AV:N/AC:L/Au:N/C:C/I:C/A:C"}</li>
            </ul>

            <table>
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Access Vector</td><td>{"NETWORK"}</td></tr>
                    <tr><td>Access Complexity</td><td>{"LOW"}</td></tr>
                    <tr><td>Authentication</td><td>{"NONE"}</td></tr>
                    <tr><td>Confidentiality Impact</td><td>{"COMPLETE"}</td></tr>
                    <tr><td>Integrity Impact</td><td>{"COMPLETE"}</td></tr>
                    <tr><td>Availability Impact</td><td>{"COMPLETE"}</td></tr>
                </tbody>
            </table>

            <h2>Scores:</h2>
            <ul>
                <li><strong>Exploitability Score:</strong> {3.9}</li>
                <li><strong>Impact Score:</strong> {10}</li>
            </ul>

            <h2>CPE:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Criteria</th>
                        <th>Match Criteria ID</th>
                        <th>Vulnerable</th>
                    </tr>
                </thead>
                <tbody>
                    {details.cpe.map((cpe, index) => (
                        <tr key={index}>
                            <td>{cpe.criteria}</td>
                            <td>{cpe.matchCriteriaId}</td>
                            <td>{cpe.vulnerable}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CveDetailsPage;
