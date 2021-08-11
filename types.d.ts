import { CSSProperties } from "react";

declare global {
  interface Window {
    /** anything you need to lob on to the winodw obj can go here */
  }
}

/** THEME TYPES */

export type TTheme = { [key: string]: CSSProperties};

export interface IThemes { 
  [key: string]: TTheme;
}

/**  */
