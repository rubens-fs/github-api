import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {
    const { GithubState, getUser, getUserRepos, getUserStarred } = useContext ( GithubContext );

    return { GithubState, getUser, getUserRepos, getUserStarred };
};

export default useGithub;
