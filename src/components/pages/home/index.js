import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import { fetchUsers } from '../../../modules/actions';
import { styles } from './styles';

// eslint-disable-next-line no-shadow,react/prop-types
const Home = ({ fetchUsers }) => {
  const { home } = styles();
  const onclick = () => fetchUsers();
  return (
    <div className={home}>
      <Button onClick={onclick}>Click</Button>
    </div>
  );
};

// const mapStateToProps = () => ({data: state.dataStore.fetchedData})

const mapDispatchToProps = dispatch => ({
  fetchUsers: bindActionCreators(fetchUsers, dispatch),
});

export const ConnectedHome = connect(
  null,
  mapDispatchToProps
)(Home);
