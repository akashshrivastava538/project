import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
    const { id } = useParams(); // Extract the CVE ID from the route parameter
    const [details, setDetails] = useState(null); // State to store the CVE details
    const [error, setError] = useState(null); // State to handle errors
    const [loading, setLoading] = useState(true); // State to handle loading

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/cves/details/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setDetails(data);
                setLoading(false); // Set loading to false when data is fetched
            } catch (err) {
                setError(err.message);
                setLoading(false); // Set loading to false when an error occurs
            }
        };

        fetchDetails();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>; // Show a loading indicator while fetching data
    }

    if (error) {
        return <p>Error: {error}</p>; // Show the error message if an error occurs
    }

    if (!details) {
        return <p>No details available for this CVE.</p>; // Show a message if no details are found
    }

    return (
        <div>
            <h1>{details.id}</h1>
            <p><strong>Identifier:</strong> {details.identifier}</p>
            <p><strong>Description:</strong> {details.description}</p>
            <p><strong>Published Date:</strong> {details.publishedDate}</p>
            <p><strong>Last Modified Date:</strong> {details.lastModifiedDate}</p>
            <p><strong>Status:</strong> {details.status}</p>
            {/* <p><strong>Severity:</strong> {details.severity}</p>
            <p><strong>Score:</strong> {details.score}</p>
            <p><strong>Exploitability Score:</strong> {details.exploitabilityScore}</p>
            <p><strong>Impact Score:</strong> {details.impactScore}</p> */}
        </div>
    );
};

export default DetailsPage;
