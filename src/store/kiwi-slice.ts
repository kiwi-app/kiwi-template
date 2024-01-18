'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface KiwiState {
  count: number;
}

const initialState: KiwiState = {
  count: null,
};

export const kiwiSlice = createSlice({
  name: 'kiwi',
  initialState,
  reducers: {
    changeCounter(state, action) {
      state.count = action.payload;
    },
  },
});

export const { changeCounter } = kiwiSlice.actions;

export default kiwiSlice.reducer;
