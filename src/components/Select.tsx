import React from "react"
import { RecordsAmount, IFunction } from "../interface/Interface"
import './styles.css'

const Select = ( {chooseAmount}: any, {recordsAmount}: any): JSX.Element  => {

return (    
    <div className="select-items">
        <label>
            Select records to display:        
        </label>
        <select value={recordsAmount} onChange={(e) => chooseAmount(e.target.value)}>           
            {Object.keys(RecordsAmount).map((key: string | any) => 
                { if( isNaN(key) )   
                    return <option key={key}>{RecordsAmount[key]}</option>
                }
            )}      
        </select>
    </div>    
 )
}

export default Select;