export enum ThemeValue {
    defult,
    dark,
    light,
}

export type themeProps = {
    theme: ThemeValue;
    bgColor?: any;
    bgHoverColor?: any;
    txHoverColor?: any;
};
