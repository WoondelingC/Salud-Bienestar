import { types } from '../types/types'

const initialState = {
    post: [],
    postActive: {
        title:'',
        urlImg: '',
        urlVideo:'',
        autor: '',
        posts:'',
        categoria: '',
        fecha:''
       
        
        
    }
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.postAddNew:
            return {
                ...state,
                post: [action.payload, ...state.post]
            }
        case types.postGet:
            return {
                ...state,
                post: [...action.payload]
            }

        case types.postActive:
            return {
                ...state,
                postActive: {
                    ...action.payload
                }
            }
            
        case types.postActiveClear:
            return {
                ...state,
                postActive: {
                    title:'',
                    urlImg: '',
                    urlVideo:'',
                    autor: '',
                    posts:'',
                    categoria: '',
                    fecha:'',
                    
                    
                },
            }
        default:
            return state;
    }
}