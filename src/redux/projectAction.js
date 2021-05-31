export const ADD_PROJECT = "ADD_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT"
export const INDEX_PROJECT = "INDEX_PROJECT";

export const addProject = (data) => {
    return {
        type: 'ADD_PROJECT',
        payload: data,
    }
}

export const updateProject = (data) => {
    return {
        type: 'UPDATE_PROJECT',
        payload: data,
    }
}

export const removeProject = (data) => {
    return {
        type: 'REMOVE_PROJECT',
        payload: data,
    }
}
export const projectIndex = (data) => {
    return {
        type: 'INDEX_PROJECT',
        payload: data,
    }
}