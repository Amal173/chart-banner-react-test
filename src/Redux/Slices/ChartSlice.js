import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

export const getTableData = createAsyncThunk(
    "table/getTableData",
    async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/table");
            return response.data
        } catch (error) {
            console.log(error.message);
        }
    }
)

export const getPieChartData = createAsyncThunk(
    "piechart/getPieChartData",
    async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/pie-chart");
            return response.data
        } catch (error) {
            console.log(error.message);
        }
    }
)

export const getGraphData = createAsyncThunk(
    "graph/getGraphData",
    async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/graph");
            return response.data
        } catch (error) {
            console.log(error.message);
        }
    }
)

const initialState = {
    tableData: [],
    pieChartData: [],
    graphData: [],
}


export const chartSlice = createSlice({
    name: 'chart',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getTableData.fulfilled, (state, action) => {
                state.tableData = action.payload
            })
            .addCase(getGraphData.fulfilled, (state, action) => {
                state.graphData = action.payload
            })
            .addCase(getPieChartData.fulfilled, (state, action) => {
                state.pieChartData = action.payload
            })
            .addCase(getTableData.rejected, () => {

                console.log("Error  getTableData method");
            })
            .addCase(getGraphData.rejected, () => {

                console.log("Error  getGraphData method");
            })
            .addCase(getPieChartData.rejected, () => {

                console.log("Error  getPieChartData method");
            })
    }
})



export default chartSlice.reducer