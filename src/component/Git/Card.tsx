import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { GitRepository } from 'mobx-github';
import { observer } from 'mobx-react';
import { FC } from 'react';

import { i18n } from '../../model/Translation';
import { GitLogo } from './Logo';

export type GitCardProps = Pick<GitRepository, 'full_name' | 'html_url' | 'languages'> &
  Partial<Pick<GitRepository, 'topics' | 'description' | 'homepage'>>;

export const GitCard: FC<GitCardProps> = observer(
  ({ full_name, html_url, languages = [], topics = [], description, homepage }) => (
    <Card>
      <CardContent>
        <CardHeader>
          <a target="_blank" href={html_url} rel="noreferrer">
            {full_name}
          </a>
        </CardHeader>

        <nav>
          {topics.map(topic => (
            <Badge
              key={topic}
              // bg={text2color(topic, ['light'])}
              component="a"
              target="_blank"
              href={`https://github.com/topics/${topic}`}
            >
              {topic}
            </Badge>
          ))}
        </nav>
        <Grid component="ul">
          {languages.map(language => (
            <Grid key={language} component="li">
              <GitLogo name={language} />
            </Grid>
          ))}
        </Grid>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        {homepage && (
          <Button color="success" target="_blank" href={homepage}>
            {i18n.t('home_page')}
          </Button>
        )}
      </CardActions>
    </Card>
  )
);
