import { GlobalState } from "@/redux/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const globalState: GlobalState = {
	token: "",
	userInfo: "",
	language: "",
	themeConfig: {
		primary: "#1890ff",
		isDark: false,
		weakOrGray: ""
	}
};

const globalSlice = createSlice({
	name: "global",
	initialState: globalState,
	reducers: {
		setToken(state: GlobalState, { payload }: PayloadAction<string>) {
			state.token = payload;
		},
		setLanguage(state: GlobalState, { payload }: PayloadAction<string>) {
			state.language = payload;
		},
		setDark(state: GlobalState, { payload }: PayloadAction<boolean>) {
			state.themeConfig.isDark = payload;
		},
		setWeakOrGray(state: GlobalState, { payload }: PayloadAction<string>) {
			state.themeConfig.weakOrGray = payload;
		}
	}
});

export const { setToken, setLanguage, setDark, setWeakOrGray } = globalSlice.actions;
export default globalSlice.reducer;