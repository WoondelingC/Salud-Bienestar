import { types } from '../types/types'

const initialState = {
    cita: [],
    active: {
        url: '',
        nombre: '',
        email:'',
        categoria: '',
        fecha:'',
        hora:''
        
    },
    search:[]
}

export const citaReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.citaPost:
            return {
                ...state,
                cita: [action.payload, ...state.cita]
            }
        case types.citaGet:
            return {
                ...state,
                cita: [...action.payload]
            }

        case types.citaActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
            case types.citaListar:
                return {
                    state,
                    cita: [...action.payload]
                }
            case types.citaListarBusqueda:
                return {
                    ...state,
                    search: [...action.payload]
                }
        case types.LogoutClean:
            return {
                ...state,
                active: {
                    url: '',
                    nombre: '',
                    email:'',
                    categoria: '',
                    fecha:'',
                    hora:''
                }
            }
        default:
            return state;
    }
}
