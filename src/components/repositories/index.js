import React, { useEffect, useState } from 'react';
import useGithub from '../../hooks/github-hooks';
import RepositoryItem from '../repository-item';
import * as S from "./styled";

function Repositories() {
  const { GithubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, sethasUserForSearchrepos] = useState(false);
  
  useEffect(() => {
    if (GithubState.user.login) {
      getUserRepos(GithubState.user.login);
      getUserStarred(GithubState.user.login);
    }
    sethasUserForSearchrepos(GithubState.repositories);
  }, [GithubState.user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
      <S.WrapperTabs 
          selectedTabClassName='is-selected'
          selectedTabPanelClassName='is-selected'
      >
          <S.WrapperTabList>
              <S.WrapperTab>Repositories</S.WrapperTab>
              <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {GithubState.repositories.map((item) => (
                <RepositoryItem 
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {GithubState.starred.map((item) => (
                <RepositoryItem 
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
      </S.WrapperTabs>
    ) : ( 
      <></>
    )}
    </>
  );
};

export default Repositories;
