import { Button, Card, CardActions, CardHeader, CardMedia, Container, Grid2 as Grid } from '@mui/material';
import { observer } from 'mobx-react';
import { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-class-tools';

import project, { Project } from '../model/Project';
import { i18n } from '../model/Translation';

const { t } = i18n;

@observer
class HomePage extends Component<
    RouteComponentProps<{}, {}, { guest: string }>
> {
    componentDidMount() {
        project.getList(
            'facebook/react',
            'microsoft/TypeScript',
            'mobxjs/mobx',
            'react-bootstrap/react-bootstrap',
            'EasyWebApp/KoAJAX',
            'idea2app/ECharts-JSX'
        );
    }

    componentWillUnmount() {
        project.clearList();
    }

    renderProject = ({
        id,
        name,
        logo,
        description,
        homepage,
        html_url
    }: Project) => (
        <Grid key={id} size={{xs:12,sm:6,lg:3}} >
            <Card >
                <CardMedia component='img' image={logo} alt='Material UI Icon' />
                <CardHeader title={name} subheader={description} />
               
                <CardActions className="d-flex justify-content-between">
                    <Button
                      
                        target="_blank"
                        href={homepage}
                    >
                        {t('home_page')}
                    </Button>
                    <Button
                    
                        target="_blank"
                        href={html_url}
                    >
                        {t('source_code')}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );

    render() {
        const { guest } = this.props.query,
            { list } = project;

        return (
            <Container >
                <h1 className="my-4">{t('upstream_projects')}</h1>

                {guest && (
                    <h2>
                        {t('welcome')} {guest}!
                    </h2>
                )}
                <Grid>
                    {list.map(this.renderProject)}
                </Grid>
            </Container>
        );
    }
}

export default withRouter(HomePage);
