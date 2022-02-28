import React, { useContext } from 'react';
import DataTable from '../components/DataTable';
import MainView from '../components/Main';
import { DataContext } from '..';



function MainPage() {  
  const data = useContext<any>(DataContext)  
  return (
    <div className="main-page">
      <MainView/>
      <DataTable data={data}/>
    </div>
  );
}

export default MainPage;
