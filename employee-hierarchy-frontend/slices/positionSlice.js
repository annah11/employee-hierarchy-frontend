import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  positions: [],
  status: 'idle',
  error: null
};

export const fetchPositions = createAsyncThunk('positions/fetchPositions', async () => {
  const response = await axios.get('http://localhost:3000/positions');
  return response.data;
});

export const addPosition = createAsyncThunk('positions/addPosition', async (newPosition) => {
  const response = await axios.post('http://localhost:3000/positions', newPosition);
  return response.data;
});

const positionSlice = createSlice({
  name: 'positions',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPositions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPositions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.positions = action.payload;
      })
      .addCase(fetchPositions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPosition.fulfilled, (state, action) => {
        state.positions.push(action.payload);
      });
  }
});

export default positionSlice.reducer;
