
/* themeConfigProp */
export interface ThemeConfigProp {
	primary: string;
	isDark: boolean;
	weakOrGray: string;
}


/* GlobalState */
export interface GlobalState {
	token: string;
	userInfo: any;
	language: string;
	themeConfig: ThemeConfigProp;
}