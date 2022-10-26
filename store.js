import { configureStore, createSlice } from '@reduxjs/toolkit';

let listIndex = createSlice({
  name : "listdata",
  initialState: {data : 0},
  reducers : {
    ChangeIndex(state,action){
      state.data = action.payload
    }
  }
})

let svgListIndex = createSlice({
  name : "svgListData",
  initialState: {data : 0},
  reducers : {
    ChangeSvgIndex(state, action){
      state.data = action.payload
    }
  }
})

export let {ChangeIndex} = listIndex.actions
export let {ChangeSvgIndex} = svgListIndex.actions

export default configureStore({
  reducer: {
    listIndex : listIndex.reducer,
    svgListIndex : svgListIndex.reducer
  }
})