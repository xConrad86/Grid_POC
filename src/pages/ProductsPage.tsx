import React, { useContext} from 'react';
import DataTable from '../components/DataTable';
import { ExampleData } from '../data/Data';
import MainView from '../components/Main';
import ProductsView from '../components/Products';
import { IData } from '../interface/Interface';
import { useParams, useLocation } from "react-router-dom";
import ErrPage from './ErrPage';
import { DataContext } from '..';

//{product}: IData | any
function ProductsPage() {
  const data = useContext<any>(DataContext)  
  let { id } = useParams<string>();
  let location: any = useLocation();
  let product: IData | any;
  
  if(location.state !== null) {
    product = location.state.product;
  } else if (id) {  
    product = data.filter((elem: IData | any) => elem.code === id)[0]    
  } 
  
  if(!product) {
      return <ErrPage err_msg={"Such product not exist."}/>
  }
  console.log("product page", product)
  return (
    <div className="main-page">
      <ProductsView product={product} />      
    </div>
  );
}

export default ProductsPage;
