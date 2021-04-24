import { createAction, createReducer } from "@reduxjs/toolkit";
import { Application, Resource } from "../types";

interface IInitialState {
    applications: Application[];
    resources: Resource[];
}

const initialState: IInitialState = {
    applications: [],
    resources: [],
};

export const setApplications = createAction<Application[]>("SET_APPLICATIONS");
export const setResources = createAction<Resource[]>("SET_RESOURCES");

export default createReducer(initialState, builder =>
    builder
        .addCase(setApplications, (state, { payload }) => ({
            ...state,
            applications: payload,
        }))
        .addCase(setResources, (state, { payload }) => ({
            ...state,
            resources: payload,
        })),
);
