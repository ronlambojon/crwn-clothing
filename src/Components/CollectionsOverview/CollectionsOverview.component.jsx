import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../CollectionPreview/CollectionPreview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import {
  CollectionsOverviewContainer
} from './CollectionsOverview.styles';
// import './CollectionsOverview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview 
          key={id} 
          {...otherCollectionProps}
        />
      ))
    }
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);