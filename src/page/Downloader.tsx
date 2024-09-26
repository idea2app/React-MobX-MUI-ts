import { textJoin } from 'mobx-i18n';
import { observer } from 'mobx-react';
import { FC, FormEvent } from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { formToJSON } from 'web-utility';

import { Downloader } from '../component/Downloader';
import { downloader } from '../model/service';
import { i18n } from '../model/Translation';

const { t } = i18n;

const addTask = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const { path } = formToJSON(form);

    await downloader
        .createTask(path as string)
        .start({ chunkSize: 1024 ** 2 / 2 });

    form.reset();
};

export const DownloaderPage: FC = observer(() => (
    <Container>
        <h1 className="my-4">{textJoin(t('downloader'), t('examples'))}</h1>

        <Form
            className="d-flex align-items-center gap-3 mb-3"
            onSubmit={addTask}
        >
            <FloatingLabel className="flex-fill" label="URL">
                <Form.Control
                    placeholder="URL"
                    type="url"
                    name="path"
                    required
                />
            </FloatingLabel>

            <Button type="submit">+</Button>
        </Form>

        <Downloader />
    </Container>
));
