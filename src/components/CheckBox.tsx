import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { FuncContext } from './DataTable'

const CheckBox = ({params}: any) => {
  const [isChecked, setIsChecked] = useState<boolean>(params.data.is_unread)
  const handleSelectedItems = useContext<any>(FuncContext)  
  
  const changeState = (): void => {  
      params.data.is_unread = !params.data.is_unread
      setIsChecked(params.data.is_unread)
   }

   useEffect(() => {      
      handleSelectedItems(params.data.code, isChecked)  
   }, [isChecked])
   
  return (     
        <input type={"checkbox"} checked={isChecked} onChange={() => changeState()}/>     
    );  
}

export default CheckBox;
