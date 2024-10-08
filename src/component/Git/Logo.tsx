import { CardMedia } from '@mui/material';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Component } from 'react';

export interface GitLogoProps {
  name: string;
}

@observer
export class GitLogo extends Component<GitLogoProps> {
  @observable
  accessor path = '';

  async componentDidMount() {
    const { name } = this.props;
    const topic = name.toLowerCase();

    try {
      const { src } = await this.loadImage(
        `https://raw.githubusercontent.com/github/explore/master/topics/${topic}/${topic}.png`
      );
      this.path = src;
    } catch {
      const { src } = await this.loadImage(`https://github.com/${name}.png`);

      this.path = src;
    }
  }

  loadImage(path: string) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new globalThis.Image();

      image.onload = () => resolve(image);
      image.onerror = reject;

      image.src = path;
    });
  }

  render() {
    const { path } = this;
    const { name } = this.props;

    return (
      path && <CardMedia sx={{ height: 32, width: 32 }} component="img" image={path} alt={name} />
    );
  }
}
