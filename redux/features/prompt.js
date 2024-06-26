import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  err: "",
  prompt: "",
  loading: false,
  msg: [
  
  ],
};

export const promptSlice = createSlice({
  name: "prompt",
  initialState,
  reducers: {
    setPrompt: (state, action) => {
      state.prompt = action.payload;
    },
    setMsg: (state, action) => {
      const val = action.payload;
      state.msg.push({bot: val.bot, you: val.you});
      state.prompt = "";
      state.err = "";
    },
    setLoader: (state, action) => {
      state.loading = action.payload;
    },
    setErr: (state, action) => {
      state.err = action.payload;
    }
  },
});

export const { setPrompt, setMsg, setLoader, setErr } = promptSlice.actions;
export const promptReducer = promptSlice.reducer;
