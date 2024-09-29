import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { TranslationModel } from 'mobx-i18n';
import { observer } from 'mobx-react';
import { DataObject, Filter, ListModel } from 'mobx-restful';
import { FC, ReactNode } from 'react';

import { GitCard } from '../component/Git/Card';
import { ScrollBoundaryProps } from '../component/ScrollBoundary';
import { ScrollList } from '../component/ScrollList';
import { repositoryStore } from '../model/service';
import { i18n } from '../model/Translation';

export interface ScrollListProps<D extends DataObject, F extends Filter<D> = Filter<D>>
  extends Pick<ScrollBoundaryProps, 'className'> {
  translator: TranslationModel<string, 'load_more' | 'no_more'>;
  store: ListModel<D, F>;
  filter?: F;
  defaultData?: D[];
  renderList(allItems: D[]): ReactNode;
}

export const ScrollListPage: FC = observer(() => (
  <Container>
    <Typography variant="h1">{i18n.t('scroll_list')}</Typography>

    <ScrollList
      translator={i18n}
      store={repositoryStore}
      renderList={allItems => (
        <Grid component="ul">
          {allItems.map(item => (
            <Grid key={item.id}>
              <GitCard {...item} />
            </Grid>
          ))}
        </Grid>
      )}
    />
  </Container>
));
