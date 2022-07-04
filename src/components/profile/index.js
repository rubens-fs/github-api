import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

function Profile() {
    const { GithubState } = useGithub();

    return (
        <S.Wrapper>
            <S.WrapperImage
                src={GithubState.user.avatar}
                alt="Avatar of user" 
            />
            <S.WrapperInfoUser>
                <div>
                    <h1>{GithubState.user.name}</h1>
                    <S.WrapperUserGeneric>
                        <h3>Username: </h3>
                        <a
                         href={GithubState.user.html_url} target="_blank"
                         rel="noreferrer"
                        >
                         {GithubState.user.login}
                        </a>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Company: </h3>
                        <span>{GithubState.user.company}</span>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Location: </h3>
                        <span>{GithubState.user.location}</span>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Blog: </h3>
                        <a
                         href={GithubState.user.blog} target="_blank"
                         rel="noreferrer"
                        >
                         {GithubState.user.blog}
                        </a>
                    </S.WrapperUserGeneric>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{GithubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>{GithubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{GithubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{GithubState.user.public_repos}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    );
}

export default Profile;