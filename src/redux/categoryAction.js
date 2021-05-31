export const ADD_CATEGORY = 'ADD_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const INDEX_CATEGORY = 'INDEX_CATEGORY';


export const addCategory = (data) => {
    return {
        type: 'ADD_CATEGORY',
        payload: data
    };
}

export const updateCategory = (data) => {
    return {
        type: 'UPDATE_CATEGORY',
        payload: data
    };
}

export const removeCategory = (data) => {
    return {
        type: 'REMOVE_CATEGORY',
        payload: data,
    };
}

export const categoryIndex = (data) => {
    return {
        type: 'INDEX_CATEGORY',
        payload: data,
    };
}