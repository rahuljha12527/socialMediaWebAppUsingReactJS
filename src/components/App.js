import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import posts from '../reducers/posts';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts} = this.props;
    return (
      <div>
        <div className="posts-list">
          {posts.map((post) => (
            <div className="post-wrapper" key={post._id}>
              <div className="post-header">
                <div className="post-avatar">
                  <img
                    src="https://image.flaticon.com/icons/svg/3011/3011270.svg"
                    alt="user-pic"
                  />
                  <div>
                    <span className="post-author">{post.user.name}</span>
                    <span className="post-time">a min ago</span>
                  </div>
                </div>
                <div className="post-content">{post.content}</div>

                <div className="post-actions">
                  <div className="post-like">
                    <img
                      src="https://image.flaticon.com/icons/svg/900/900397.svg"
                      alt="likes-icon"
                    />
                    <span>{post.likes.length}</span>
                    <div className="post-comments-icom">
                      <img
                        src="https://www.flaticon.com/premium-icon/icons/svg/2939/2939459.svg"
                        alt="likes-icon"
                      />
                      <span>{post.comments.length}</span>
                    </div>
                  </div>

                 
                </div>
                <div className="post-comment-box">
                       <input placeholder="Start typing a comment"/>
                  </div>
              
                <div className="post-comments-list">
                    <div className="post-comments-item">
                      <div className="post-comment-header">
                            <span className="post-comment-author">Rahul</span>
                            <span className="post-comment-time">a minute ago</span>
                            <span className="post-comment-likes">22</span>
                      </div>
                       
                       <div className="post-comment-content">
                             Random comment
                       </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
