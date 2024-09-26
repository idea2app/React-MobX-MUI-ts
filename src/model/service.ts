import { githubClient, RepositoryModel } from 'mobx-github';
import { Downloader } from 'mobx-restful';

const GithubToken = process.env.GITHUB_TOKEN;

githubClient.use(({ request }, next) => {
    if (GithubToken)
        request.headers = {
            ...request.headers,
            Authorization: `Bearer ${GithubToken}`
        };
    return next();
});

export const repositoryStore = new RepositoryModel('idea2app');
export const downloader = new Downloader();
