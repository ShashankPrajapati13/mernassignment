import { createSlice } from '@reduxjs/toolkit'
import axios from '../../axios/axios'



const initialState= {
    user:null,
    isAuthenticate:false,
  userData:null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login:(state,action) =>{
        state.user = action.payload
        state.isAuthenticate= true
    },
     getData: (state,action)=>{
        state.userData = action.payload
     }
  },
})

// Action creators are generated for each case reducer function
export const { getData,login } = userSlice.actions

export const asyncLogin = (username,password) => async (dispatch)=>{
 const data = await axios.post("/login",{username,password})
 dispatch(login(data.data.user))
}

export const acyncGetData = (id)=> async (dispatch)=>{
    const data = await axios.get(`/user/${id}`)
    dispatch(getData(data.data))

}

export default userSlice.reducer