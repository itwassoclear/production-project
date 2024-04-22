import { lazy } from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // just for fun
  setTimeout(() => resolve(import('./MainPage')), 1500)
}))
