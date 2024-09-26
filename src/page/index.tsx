// import { Container } from 'react-bootstrap';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { MainNavigator } from '../component/MainNavigator';
// import ChartPage from './chart.mdx';
// import { ComponentPage } from './Component';
// import { DownloaderPage } from './Downloader';
import HomePage from './Home';
// import { PaginationPage } from './Pagination';
// import { ScrollListPage } from './ScrollList';

export const PageFrame = () => (
    <>
                <MainNavigator />

        <HashRouter>
            <Routes >
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/component" element={<ComponentPage />} />
                <Route path="/pagination" element={<PaginationPage />} />
                <Route path="/scroll-list" element={<ScrollListPage />} /> */}
                {/* <Route
                    path="/chart"
                    element={
                        <Container>
                            <ChartPage />
                        </Container>
                    }
                /> */}
                {/* <Route path="/downloader" element={<DownloaderPage />} /> */}
            </Routes>
        </HashRouter>
    </>
);
