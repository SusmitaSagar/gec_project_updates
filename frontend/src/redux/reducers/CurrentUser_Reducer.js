import { Current_User_Data,Logout_Current_User_Data } from "../reduxConstants";



const CurrentUser_Reducer =(data=[],action)=>{

  switch(action.type){
    case Current_User_Data :  data=action.data;
        return data;

    case Logout_Current_User_Data: data=[];
         return data;

    default: return data;
  }

}

export default CurrentUser_Reducer;