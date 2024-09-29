import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Container,
  Stack,
  Typography
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { observer } from 'mobx-react';
import { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-class-tools';

import project, { Project } from '../model/Project';
import { i18n } from '../model/Translation';

const { t } = i18n;

@observer
class HomePage extends Component<RouteComponentProps<{}, {}, { guest: string }>> {
  componentDidMount() {
    project.getList(
      'facebook/react',
      'microsoft/TypeScript',
      'mobxjs/mobx',
      'mui/material-ui',
      'EasyWebApp/KoAJAX',
      'idea2app/ECharts-JSX'
    );
  }

  componentWillUnmount() {
    project.clearList();
  }

  renderProject = ({ id, name, logo, description, homepage, html_url }: Project) => (
    <Grid key={id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderColor: 'divider'
        }}
      >
        <CardMedia component="img" image={logo} alt="Material UI Icon" />

        <Stack direction="column" sx={{ justifyContent: 'space-between', height: '100%' }}>
          <CardHeader title={name} subheader={description} />

          <CardActions>
            <Button target="_blank" href={homepage}>
              {t('home_page')}
            </Button>
            <Button target="_blank" href={html_url}>
              {t('source_code')}
            </Button>
          </CardActions>
        </Stack>
      </Card>
    </Grid>
  );

  render() {
    const { guest } = this.props.query,
      { list } = project;

    return (
      <Container>
        <Typography variant="h1">{t('upstream_projects')}</Typography>

        {guest && (
          <Typography variant="h2">
            {t('welcome')} {guest}!
          </Typography>
        )}
        <Grid spacing={{ xs: 2, md: 3 }} columns={12} container>
          {list.map(this.renderProject)}
        </Grid>
      </Container>
    );
  }
}

export default withRouter(HomePage);
