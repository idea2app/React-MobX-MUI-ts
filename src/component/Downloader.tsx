import { Icon } from 'idea-react';
import { observer } from 'mobx-react';
import { DownloadTask } from 'mobx-restful/dist/Downloader/Task';
import { FC } from 'react';
import { Button, Card, ProgressBar } from 'react-bootstrap';

import { downloader } from '../model/service';

export const DTCard: FC<{ task: DownloadTask }> = observer(({ task }) => (
    <Card>
        <Card.Body>
            <Card.Title>{task.name}</Card.Title>
            <ProgressBar
                striped={task.percent < 100}
                animated={task.executing}
                now={task.percent}
                label={`${task.percent}%`}
            />
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
            <small>
                {task.loadedSize.toShortString()} /{' '}
                {task.totalSize.toShortString()}
            </small>
            <div className="d-flex gap-3">
                {task.percent < 100 &&
                    (task.executing ? (
                        <Button
                            size="sm"
                            variant="warning"
                            onClick={() => task.pause()}
                        >
                            <Icon name="pause" />
                        </Button>
                    ) : (
                        <Button
                            size="sm"
                            variant="success"
                            onClick={() => task.start()}
                        >
                            <Icon name="play" />
                        </Button>
                    ))}
                <Button
                    size="sm"
                    variant="danger"
                    disabled={task.executing}
                    onClick={() => downloader.destroyTask(task.name)}
                >
                    <Icon name="trash" />
                </Button>
            </div>
        </Card.Footer>
    </Card>
));

export const Downloader: FC = observer(() => (
    <ol className="list-unstyled d-flex flex-column gap-3">
        {downloader.tasks.map(task => (
            <li key={task.id}>
                <DTCard task={task} />
            </li>
        ))}
    </ol>
));
