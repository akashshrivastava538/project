import React from 'react';

const Details = ({ id, description, score, publishedDate }) => (
    <div>
        <h1>Details for {id}</h1>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Score:</strong> {score}</p>
        <p><strong>Published Date:</strong> {publishedDate}</p>
    </div>
);

export default Details;
