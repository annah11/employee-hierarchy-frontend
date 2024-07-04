import { configureStore } from '@reduxjs/toolkit';
import positionReducer from '../slices/positionSlice';

export const store = configureStore({
  reducer: {
    positions: positionReducer,
  },
});
