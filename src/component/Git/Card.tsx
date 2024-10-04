import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardOwnProps,
  Chip,
  Typography
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { GitRepository } from 'mobx-github';
import { observer } from 'mobx-react';
import { FC } from 'react';

import { i18n } from '../../model/Translation';
import { GitLogo } from './Logo';

export type GitCardProps = Pick<GitRepository, 'full_name' | 'html_url' | 'languages'> &
  Partial<Pick<GitRepository, 'topics' | 'description' | 'homepage'>> &
  CardOwnProps;

export const GitCard: FC<GitCardProps> = observer(
  ({ full_name, html_url, languages = [], topics = [], description, homepage, sx, ...rest }) => (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        ...sx
      }}
      {...rest}
    >
      <CardHeader
        title={
          <a target="_blank" href={html_url} rel="noreferrer">
            {full_name}
          </a>
        }
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 2
        }}
      >
        <Box component="ul" sx={{ m: 0, p: 0, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {topics.map(topic => (
            <Chip
              key={topic}
              component="a"
              target="_blank"
              href={`https://github.com/topics/${topic}`}
              label={topic}
              size="small"
              clickable
            />
          ))}
        </Box>
        <Grid component="ul" sx={{ m: 0, p: 0 }}>
          {languages.map(language => (
            <GitLogo name={language} />
          ))}
        </Grid>
        <Typography>{description}</Typography>
      </CardContent>

      <CardActions>
        <Button color="success" target="_blank" href={homepage || html_url}>
          {i18n.t('home_page')}
        </Button>
      </CardActions>
    </Card>
  )
);
