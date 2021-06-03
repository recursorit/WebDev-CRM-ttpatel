import { ADD_CATEGORY, UPDATE_CATEGORY, REMOVE_CATEGORY, INDEX_CATEGORY } from './categoryAction'
import moment from 'moment'

const initialState = {
    categories: [
        {
            category: 'HealthCare',
            date: moment().format('YYYY-MM-DD'),
            index: 0,
        },
        {
            category: 'Bussiness',
            date: moment().format('YYYY-MM-DD'),
            index: 1,
        },
        {
            category: 'Aviation',
            date: moment().format('YYYY-MM-DD'),
            index: 2,
        },
        {
            category: 'Hospitality',
            date: moment().format('YYYY-MM-DD'),
            index: 3,
        },
    ],
    currentIndex: 0
}


const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, {
                    category: action.payload,
                    date: moment().format('YYYY-MM-DD'),
                    index: state.categories.length
                }],
            }


        case REMOVE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(user => user.index !== action.payload)

            }

        case UPDATE_CATEGORY:
            return {
                ...state,
                categories: state.categories.map(category => {
                    if (category.index === state.currentIndex) {
                        return {
                            category: action.payload,
                            date: moment().format('YYYY-MM-DD'),
                            index: state.currentIndex
                        }
                    }
                    return category
                })
            }

        case INDEX_CATEGORY:
            return {
                ...state,
                currentIndex: action.payload
            }

        default: return state
    }
}
export default categoryReducer