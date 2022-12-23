import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRockets } from '../../apis/rockets';

const initialState = {
  data: [],
  loading: false,
  error: '',
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const rockets = await getRockets();
    return rockets;
  }
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reservation: (stateData, { payload }) => {
      const state = stateData;
      state.data = state.data.map((rocket) =>
        rocket.id === payload
          ? { ...rocket, reserved: !rocket.reserved }
          : rocket
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (stateData) => {
      const state = stateData;
      state.loading = true;
      state.data = [];
      state.error = '';
    });
    builder.addCase(fetchRockets.fulfilled, (stateData, action) => {
      const state = stateData;
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(fetchRockets.rejected, (stateData, action) => {
      const state = stateData;
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export const { reservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
