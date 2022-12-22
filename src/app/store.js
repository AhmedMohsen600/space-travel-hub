import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from '../features/rockets/rocketsSlice';
import missionsSlice from '../features/missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsSlice,
  },
});

export default store;
