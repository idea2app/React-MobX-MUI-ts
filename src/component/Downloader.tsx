import DeleteIcon from '@mui/icons-material/Delete';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  LinearProgress,
  Stack,
  Typography
} from '@mui/material';
import { observer } from 'mobx-react';
import { DownloadTask } from 'mobx-restful/dist/Downloader/Task';
import { FC } from 'react';

import { downloader } from '../model/service';

export const DTCard: FC<{ task: DownloadTask }> = observer(({ task }) => (
  <Card component="li">
    <CardContent>
      <CardHeader title={task.name} />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="nowrap"
        spacing={3}
      >
        <LinearProgress
          color="primary"
          variant="determinate"
          value={task.percent}
          sx={{ width: '100%', height: 10, borderRadius: 5 }}
        />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {Math.round(task.percent)}%
        </Typography>
      </Stack>
    </CardContent>

    <CardActions sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <small>
        {task.loadedSize.toShortString()} / {task.totalSize.toShortString()}
      </small>
      <Stack direction="row">
        {task.percent < 100 &&
          (task.executing ? (
            <IconButton color="warning" onClick={() => task.pause()}>
              <PauseCircleIcon />
            </IconButton>
          ) : (
            <IconButton color="success" onClick={() => task.start()}>
              <PlayCircleIcon />
            </IconButton>
          ))}
        <IconButton
          color="error"
          disabled={task.executing}
          onClick={() => downloader.destroyTask(task.name)}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    </CardActions>
  </Card>
));

export const Downloader: FC = observer(() => (
  <Stack component="ol" spacing={3} sx={{ m: 0, p: 0 }}>
    {downloader.tasks.map(task => (
      <DTCard key={task.id} task={task} />
    ))}
  </Stack>
));
