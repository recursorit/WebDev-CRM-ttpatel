import { ADD_PROJECT, REMOVE_PROJECT, UPDATE_PROJECT, INDEX_PROJECT } from "./projectAction";
import moment from "moment";


const initialState = {
    projects: [
        {
            projectname: "CRM",
            developer: "Recursor IT",
            category: "Bussiness",
            created: moment().format('YYYY-MM-DD'),
            index: 0
        }
    ],
    currentIndex: 0
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECT:

            return {
                ...state,
                projects: [...state.projects, {
                    projectname: action.payload.projectname,
                    developer: action.payload.developer,
                    category: action.payload.category,
                    created: moment().format('YYYY-MM-DD'),
                    index: state.projects.length
                }]
            }
        case REMOVE_PROJECT:

            return {
                ...state,
                projects: state.projects.filter(user => user.index !== action.payload)
            }

        case UPDATE_PROJECT:

            return {
                ...state,
                projects: state.projects.map(project => {
                    if (project.index === state.currentIndex) {
                        return {
                            projectname: action.payload.projectname,
                            developer: action.payload.developer,
                            category: action.payload.category,
                            created: moment().format('YYYY-MM-DD'),
                            index: state.currentIndex
                        }
                    } return project
                })
            }
        case INDEX_PROJECT:
            return {
                ...state,
                currentIndex: action.payload
            }
        default: return state
    }
}

export default projectReducer