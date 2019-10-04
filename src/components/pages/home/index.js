import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import { test } from '../../../modules/actions';
import { styles } from './styles';

// eslint-disable-next-line no-shadow,react/prop-types
const Home = ({ testAction }) => {
  const { root } = styles();
  const onclick = () => testAction();
  return (
    <div className={root}>
      <Button onClick={onclick}>Click</Button>
    </div>
  );
};

// const mapStateToProps = () => ({data: state.dataStore.fetchedData})

const mapDispatchToProps = dispatch => ({
  testAction: bindActionCreators(test, dispatch),
});

export const ConnectedHome = connect(
  null,
  mapDispatchToProps
)(Home);
