// redux/cveSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching CVE details
export const fetchCveDetails = createAsyncThunk(
    'cve/fetchDetails',
    async (id) => {
        const response = await axios.get(`http://localhost:5001/api/cves/details/${id}`);
        return response.data;
    }
);

const cveSlice = createSlice({
    name: 'cve',
    initialState: {
        details: null,
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCveDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCveDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.details = action.payload;
            })
            .addCase(fetchCveDetails.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default cveSlice.reducer;
