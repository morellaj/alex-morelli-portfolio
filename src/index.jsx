// Package dependencies
import React, { Suspense, lazy } from 'react';
import 'typeface-roboto';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

// File dependencies
const HomePage = lazy(() => import('./components/home/HomePage'));
const ProjectsPage = lazy(() => import('./components/projects/ProjectsPage'));
const ArticlesPage = lazy(() => import('./components/articles/ArticlesPage'));

const GlobalStyle = createGlobalStyle`
 ${normalize}
 body {
   margin: 0;
   font-family: 'Roboto', sans-serif;
    min-height: 110vh;
    position: relative;
 }

 h1 {
   margin: 0;
 }

 p {
   margin: 0;
 }
`;

ReactDOM.render((
  <BrowserRouter>
    <GlobalStyle />
    <Navbar />
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/articles/:article" component={ArticlesPage} />
      </Switch>
    </Suspense>
  </BrowserRouter>
), document.getElementById('app'));
