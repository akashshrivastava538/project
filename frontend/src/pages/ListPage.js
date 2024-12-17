import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import { useNavigate } from 'react-router-dom';

const ListPage = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const limit = 10;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:5001/api/cves/list', {
                    params: { page, limit },
                });
                setData(response.data.data);
                setTotalResults(response.data.totalResults);
            } catch (error) {
                console.error('Error fetching CVE list:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page]);

    const totalPages = Math.ceil(totalResults / limit);

    const handleRowClick = (id) => {
        navigate(`/cves/${id}`);  // Navigate to detailed page when a row is clicked
    };

    return (
        <div>
            <h1>CVE List</h1>
            {loading ? (
                <p
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        margin: 0,
                        fontSize: '1.5rem',
                        textAlign: 'center',
                    }}
                >
                    Loading...
                </p>
            ) : (
                <>
                    <Table data={data} onRowClick={handleRowClick} />
                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        onPageChange={(newPage) => setPage(newPage)}
                    />
                </>
            )}
        </div>
    );
};

export default ListPage;
