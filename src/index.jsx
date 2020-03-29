// Package dependencies
import React, { Suspense, lazy } from 'react';
import 'typeface-roboto';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import theme from './theme';

// File dependencies
const HomePage = lazy(() => import('./components/home/HomePage'));
const ProjectsPage = lazy(() => import('./components/projects/ProjectsPage'));
const ArticlesPage = lazy(() => import('./components/articles/ArticlesPage'));

const GlobalStyle = createGlobalStyle`
 ${normalize}
 html {
  background-color: #EEECEF;
 }

 body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  min-height: 110vh;
  position: relative;
 }

 h1 {
   margin: 0;
 }

 h2 {
   margin: 0;
 }

 p {
   margin: 0;
 }
`;

ReactDOM.render((
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/articles/:article" component={ArticlesPage} />
        </Switch>
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>
), document.getElementById('app'));
