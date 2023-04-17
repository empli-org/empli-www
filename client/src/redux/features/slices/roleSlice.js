import { createSlice } from '@reduxjs/toolkit'

export const roleSlice = createSlice({
  name: 'role',
  initialState: {
    selectedRole: '',
  },
  reducers: {
    selectRole: (state, action) => {
      state.selectedRole = action.payload
    },
  },
})

export const { selectRole } = roleSlice.actions
export default roleSlice.reducer
