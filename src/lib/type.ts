import { store } from "./store";

export type MenuItem = "PENCIL" | "ERASER";
export type ActionItem = "REDO" | "UNDO" | "DOWNLOAD";
export type RootState = ReturnType<typeof store.getState>
export type ActionDispatch = typeof store.dispatch