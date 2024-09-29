import { Button, Container, Divider, Stack, TextField, Typography } from '@mui/material';
import { textJoin } from 'mobx-i18n';
import { observer } from 'mobx-react';
import { FC, FormEvent } from 'react';
import { formToJSON } from 'web-utility';

import { Downloader } from '../component/Downloader';
import { downloader } from '../model/service';
import { i18n } from '../model/Translation';

const { t } = i18n;

const addTask = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;
  const { path } = formToJSON(form);

  await downloader.createTask(path as string).start({ chunkSize: 1024 ** 2 / 2 });

  form.reset();
};

export const DownloaderPage: FC = observer(() => (
  <Container sx={{ py: 5 }}>
    <Stack spacing={4}>
      <Typography variant="h1">{textJoin(t('downloader'), t('examples'))}</Typography>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        component="form"
        spacing={3}
        noValidate
        onSubmit={addTask}
      >
        <TextField
          name="path"
          id="outlined-required"
          type="url"
          label="URL"
          defaultValue="https://idea2app.github.io/React-MobX-MUI-ts"
          fullWidth
          required
        />

        <Button variant="contained" type="submit">
          +
        </Button>
      </Stack>

      <Divider />

      <Downloader />
    </Stack>
  </Container>
));
