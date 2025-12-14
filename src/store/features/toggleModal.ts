import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface ModalProps {
  portalConfirmation: boolean;
}

const initialState: ModalProps = {
  portalConfirmation: false,
};

const toggleModalSlice = createSlice({
  name: "toggleModal",
  initialState: initialState,
  reducers: {
    toggleModal: (state, action) => {
      state[action.payload?.name as keyof typeof state] = action.payload?.value;
    },
  },
});

export const { toggleModal } = toggleModalSlice.actions;
export const toggleSelector = (state: RootState) => state.toggleModalReducer;
export default toggleModalSlice.reducer;
