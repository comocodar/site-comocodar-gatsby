import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/styles/global'
import dark from '../src/styles/themes/dark';

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider theme={dark}>
      {element}
      <GlobalStyle />
    </ThemeProvider>
  );
}