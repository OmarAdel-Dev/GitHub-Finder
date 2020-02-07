import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubcontext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { user, loading, getUser, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/">
        <button className="btn btn-light">Back To Search</button>
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className="fa fa-check text-success" />
      ) : (
        <i className="fa fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt="Profile Pic"
            style={{ width: '150px' }}
          />
          <h2>{name}</h2>
          <p>location: {location}</p>
        </div>
        <div>
          <Fragment>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
          </Fragment>
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>

        <div className="badge badge-success">Following: {following}</div>

        <div className="badge badge-light">Public Repos: {public_repos}</div>

        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <h3>Latest Public Repos:</h3>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
