import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { ActionItem, MenuItem } from '../type';


export type MenuState = {
    activeMenuItem: MenuItem;
    activeActionItem: ActionItem | null;
}

const initialState: MenuState = {
    activeMenuItem: "PENCIL",
    activeActionItem: null
}

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        onMenuItemClick: (state, action: PayloadAction<MenuItem>) => {
            state.activeMenuItem = action.payload
        },
        onActionItemClick: (state, action: PayloadAction<ActionItem>) => {
            state.activeActionItem = action.payload
        }
    }
})

export const { onActionItemClick, onMenuItemClick } = menuSlice.actions
export default menuSlice.reducer