import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import CollectionPageContainer from '../CollectionPage/CollectionPage.container';

import CollectionsOverviewContainer from '../../Components/CollectionsOverview/CollectionsOverview.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route 
        exact path={`${match.path}`} 
        component={CollectionsOverviewContainer}
      />
      <Route 
        path={`${match.path}/:collectionId`} 
        component={CollectionPageContainer}
      />
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);