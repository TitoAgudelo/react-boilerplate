import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./theme/global-style"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import PostsProvider from './providers/PostsProvider/PostsProvider';
import Home from './pages/Home';

const theme = {
  colors: {
    dark: '#2B2D3E',
    white: '#f1f1f1',
    gradient: '#6244fd',
    gray: '#4F4F4F',
    blue: '#1734ff',
    blueLight: '#D0DBF3',
    black: '#04000A',
    mute: '#EEEEEE',
    smoky: '#F4F4F4',
    gold: '#f5de38',
    yellow: '#FCD344',
    bg: '#F6F6F6',
    red: '#FEB7C2',
    blue: '#B8E4EA'
  }
}

function App() {
  return (
    <PostsProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme="default" />
        <Content>
          <Container>
            <Router>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
              </Switch>
            </Router>
          </Container>
        </Content>
      </ThemeProvider>
    </PostsProvider>
  );
}

export default App;

const Content = styled.div`
  background-color: ${({ theme: { colors } }) => colors.dark };
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  width: 1030px;
`;