import { Container } from '@mui/material';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { MainNavigator } from '../component/Layout/Nav/MainNavigator';
import ChartPage from './chart.mdx';
import { DownloaderPage } from './Downloader';
import HomePage from './Home';
import { ScrollListPage } from './ScrollList';

export const PageFrame = () => (
  <>
    <MainNavigator />

    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scroll-list" element={<ScrollListPage />} />
        <Route
          path="/chart"
          element={
            <Container>
              <ChartPage />
            </Container>
          }
        />
        <Route path="/downloader" element={<DownloaderPage />} />
      </Routes>
    </HashRouter>
  </>
);
