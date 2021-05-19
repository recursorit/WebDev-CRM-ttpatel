import  {EDIT_USER} from './actions'

 const initialState ={
     index:0
 }

 const adminReducer =(state=initialState,action)=>{
     switch(action.type){
         case EDIT_USER:
             return{
                 ...state,
                 index:action.payload
             }
             default:return state
     }
 }

 export default adminReducer