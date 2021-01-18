import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const trailsSlice = createSlice({
  name: 'trails',
  initialState: [
    {
      "id": uuidv4(),
      "name": "Trail 1",
      "location": "Somewhere"
    },
    {
      "id": uuidv4(),
      "name": "Trail 2",
      "location": "Somewhere Else"
    }
  ],
  reducers: {
    upsert: (state, action) => {
      const { updatedTrail } = action.payload

      if(updatedTrail.id) {
        state.trails = state.trails.map(trail => (
          trail.id !== updatedTrail.id ? trail : {
            ...trail,
            ...updatedTrail
          }
        ))
      } else {
        state.trails.put({
          id: uuidv4(),
          ...updatedTrail
        })
      }
    },
    
  },
});

export const { upsert } = trailsSlice.actions;

export const selectTrails = state => state.trails;

export default trailsSlice.reducer;
