import React from "react";

import {Routes,Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../category/category.components';

const ShopPage = ({ match }) => {
    return(
    <div className="shop-page">
    <Routes>
        <Route path='/shop' component={CollectionsOverview} />
            
    </Routes>
    </div>
)};


export default ShopPage;