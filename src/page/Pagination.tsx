import { Badge, Container } from '@mui/material';
import { computed } from 'mobx';
import { GitRepository } from 'mobx-github';
import { observer } from 'mobx-react';
import { Column } from 'mobx-restful-table';
import { Component } from 'react';

import { i18n } from '../model/Translation';

@observer
export class PaginationPage extends Component {
  @computed
  get columns(): Column<GitRepository>[] {
    const { t } = i18n;

    return [
      {
        key: 'full_name',
        renderHead: t('repository_name'),
        renderBody: ({ html_url, full_name }) => (
          <a target="_blank" href={html_url} rel="noreferrer">
            {full_name}
          </a>
        )
      },
      { key: 'homepage', type: 'url', renderHead: t('home_page') },
      { key: 'language', renderHead: t('programming_language') },
      {
        key: 'topics',
        renderHead: t('topic'),
        renderBody: ({ topics }) => (
          <>
            {topics?.map(topic => (
              <Badge
                key={topic}
                // as="a"
                // className="me-2 text-decoration-none"
                // // bg={text2color(topic, ['light'])}
                // target="_blank"
                // href={`https://github.com/topics/${topic}`}
              >
                {topic}
              </Badge>
            ))}
          </>
        )
      },
      {
        key: 'stargazers_count',
        type: 'number',
        renderHead: t('star_count')
      }
    ];
  }

  render() {
    return <Container>To do……</Container>;
  }
}
