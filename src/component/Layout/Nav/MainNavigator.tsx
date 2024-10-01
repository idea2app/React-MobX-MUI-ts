import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  SvgIcon,
  SvgIconProps,
  Toolbar,
  Typography
} from '@mui/material';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Component } from 'react';

import { mainNavLinks } from '../../../meta';
import { i18n, LanguageName } from '../../../model/Translation';
import ColorModeIconDropdown from './ColorModeDropdown';

function MUIIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
        fill="#007FFF"
      ></path>
    </SvgIcon>
  );
}

@observer
export class MainNavigator extends Component {
  @observable accessor menuExpand = false;
  @observable accessor menuAnchor: HTMLButtonElement = null;

  switchI18n = (key: string) => {
    i18n.changeLanguage(key as keyof typeof LanguageName);
    this.menuAnchor = null;
  };

  renderLinks = () =>
    mainNavLinks().map(({ title, href }) => (
      <Button key={title} component="a" href={href}>
        {title}
      </Button>
    ));

  renderI18nSwitch = () => {
    const { currentLanguage } = i18n,
      { menuAnchor: anchorEl } = this;

    return (
      <>
        <Button
          aria-controls="i18n-menu"
          color="secondary"
          size="small"
          id="i18n-selector"
          startIcon={<TranslateIcon />}
          endIcon={<ExpandMoreIcon />}
          onClick={event => (this.menuAnchor = event.currentTarget)}
        >
          {LanguageName[currentLanguage]}
        </Button>
        <Menu
          anchorEl={anchorEl}
          id="i18n-menu"
          slotProps={{
            paper: {
              variant: 'outlined',
              sx: {
                my: '4px'
              }
            }
          }}
          open={Boolean(anchorEl)}
          onClose={() => (this.menuAnchor = null)}
        >
          {Object.entries(LanguageName).map(([key, name]) => (
            <MenuItem
              key={key}
              value={key}
              selected={key === currentLanguage}
              onClick={() => this.switchI18n(key)}
            >
              {name}
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  };

  render() {
    return (
      <AppBar position="static" color="transparent" sx={{ backdropFilter: 'blur(8px)' }}>
        <Toolbar disableGutters>
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'nowrap'
            }}
          >
            <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
              <Box
                component="nav"
                sx={{
                  flexGrow: 1,
                  display: { xs: 'flex', md: 'none' }
                }}
              >
                <IconButton
                  aria-label="nav links"
                  aria-controls="drawer"
                  aria-haspopup="true"
                  onClick={() => (this.menuExpand = true)}
                >
                  <MenuIcon />
                </IconButton>

                <Drawer
                  anchor="left"
                  sx={{ flexDirection: 'column', gap: 2 }}
                  open={this.menuExpand}
                  onClose={() => (this.menuExpand = false)}
                >
                  {this.renderLinks()}
                </Drawer>
              </Box>

              <MUIIcon />
              <Typography variant="h6" component="a" href="/" noWrap>
                {document.title}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              sx={{
                flexGrow: 1,
                justifyContent: 'center',
                display: { xs: 'none', md: 'flex' }
              }}
            >
              {this.renderLinks()}
            </Stack>

            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
              {this.renderI18nSwitch()}
              <ColorModeIconDropdown />
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }
}
