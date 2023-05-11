import { createSlice } from '@reduxjs/toolkit';

interface PezState {
    name: string,
    series: string,
    description: string,
    price: number,
    value: number,
    year_introduced: number,
    retired: boolean,
    original_package: boolean,
}

const initialState: PezState = {
    name: 'Mickey Mouse',
    series: 'Disney',
    description: 'red baseball hat',
    price: 1.29,
    value: 1.29,
    year_introduced: 2020,
    retired: false,
    original_package: false,
   
}

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseSeries: (state, action) => { state.series = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseValue: (state, action) => { state.value = action.payload },
        chooseYearIntroduced: (state, action) => { state.year_introduced = action.payload },
        chooseRetired: (state, action) => { state.retired = action.payload },
        chooseOriginalPackage: (state, action) => { state.original_package = action.payload },
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const {
    chooseName,
    chooseSeries,
    chooseDescription,
    choosePrice,
    chooseValue,
    chooseYearIntroduced,
    chooseRetired,
    chooseOriginalPackage
} = rootSlice.actions;