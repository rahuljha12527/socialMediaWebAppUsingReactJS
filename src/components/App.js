import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Page404, Login, Signup } from './index';
import * as jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import { authenticateUser } from '../actions/auth';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = localStorage.getItem('token');

    if (token) {
      const user = jwtDecode(token); 
      console.log('user', user);

      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user.id,
          name: user.name,
        })
      );
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <Router> 
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />

            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
