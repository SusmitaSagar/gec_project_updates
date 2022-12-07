
import { Logout_Current_User_Data,Current_User_Data } from "../reduxConstants"


export const Login_User = (data)=>{
  return({
    type:Current_User_Data,
    data
  }
  )
}


export const Logout_User = ()=>{
  return({
    type:Logout_Current_User_Data
  })
}