import React, { useState, useRef, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react/lib/agGridReact'; //'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { IData } from '../interface/Interface';
import CheckBox from './CheckBox';
import { RecordsAmount } from '../interface/Interface';
import Select from './Select';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const gridStyles = {    
    height: '50vh', 
    width: '48vw'
}

export const FuncContext = React.createContext({}); 

//<Array<IData>>
const DataTable = ({data}: Array<IData> | any): JSX.Element => {  
    const [recordsAmount, setRecordsAmount] = useState<number>(RecordsAmount.SMALL)
    const [selectedItems, setSelectedItems] = useState<Array<string>>([])
    const [columnDefs] = useState([
        { field: "is_unread", edit: true, headerCheckboxSelectionFilteredOnly: true,
           cellRenderer: (params: any): JSX.Element | any => (<CheckBox params={params}/>)                    
        }, //boolean
        { field: "id", filter: true }, //string
        { field: "from", filter: true }, //string        
        { field: "sent_date", filter: true }, //number: 0
        { field: "subject", filter: true }, //string
        { field: "snippet", filter: true }, //number: 31
    ])        
   
   const chooseAmount = (selectedItem: string): void => {       
       setRecordsAmount(Number(selectedItem))
   }

   const navigate = useNavigate();
   const gridRef: any = useRef();

   
   const handleSelectedItems = (code: string, isChecked: boolean): void => {
        let newSelectedItems = selectedItems;
        let isInArray = newSelectedItems.indexOf(code);        
        if(isChecked && isInArray === -1){
           newSelectedItems.push(code)                         
        } else if(isInArray !== -1 && !isChecked) {                              
           newSelectedItems = newSelectedItems.filter(elem => elem !== code)                                    
        }
        setSelectedItems(newSelectedItems)   
        console.log("Selected items:", selectedItems)
   }   

   const getProductDetail = (params: any) => {
         navigate("/products/" + params.data.code, { state:{ product: params.data }} )
   }

   const onPageSizeChanged = (records: number ) => {
       gridRef.current.api?.paginationSetPageSize(records);        
   }

   useEffect(() => {    
      onPageSizeChanged(recordsAmount);     
   }, [recordsAmount, gridRef])

   return (
       <React.Fragment>
          <FuncContext.Provider value={handleSelectedItems}>
            <div>
                <Select chooseAmount={chooseAmount} recordsAmount={recordsAmount}/>
            </div>
            <div className="ag-theme-alpine" style={gridStyles}>           
                <AgGridReact         
                    ref={gridRef}                      
                    rowData={data}
                    rowSelection={'multiple'}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={RecordsAmount.SMALL}
                    onRowDoubleClicked={(params: any) => getProductDetail(params)}                         
                    >
                </AgGridReact>
            </div>
          </FuncContext.Provider>
       </React.Fragment>
   );
};

export default DataTable;