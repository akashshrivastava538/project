import React from 'react';

const Table = ({ data, onRowClick }) => (
    <table>
        <thead>
            <tr>
                <th>CVE ID</th>
                <th>Identifier</th>
                <th>Published Date</th>
                <th>Last Modified Date</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index} onClick={() => onRowClick(item.id)}>
                    <td>{item.id}</td>
                    <td>{item.identifier}</td>
                    <td>{item.publishedDate}</td>
                    <td>{item.lastModifiedDate}</td>
                    <td>{item.status}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;
