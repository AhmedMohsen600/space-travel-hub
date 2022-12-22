import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMissions } from '../../apis/missions';

const initialState = {
  loading: false,
  missionsArr: [],
  error: '',
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const missions = await getMissions();
    return missions;
  }
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    changeMission: (stateData, action) => {
      const state = stateData;
      state.missionsArr = state.missionsArr.map((mission) =>
        mission.mission_id === action.payload
          ? { ...mission, activeMission: !mission.activeMission }
          : mission
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (stateData) => {
      const state = stateData;
      state.loading = true;
      state.missionsArr = [];
      state.error = '';
    });
    builder.addCase(fetchMissions.fulfilled, (stateData, action) => {
      const state = stateData;
      state.loading = false;
      state.missionsArr = action.payload;
      state.error = '';
    });
    builder.addCase(fetchMissions.rejected, (stateData, action) => {
      const state = stateData;
      state.loading = false;
      state.missionsArr = [];
      state.error = action.error.message;
    });
  },
});

export default missionsSlice.reducer;
export const { changeMission } = missionsSlice.actions;
