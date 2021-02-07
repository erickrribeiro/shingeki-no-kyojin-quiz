/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import db from '../../db.json';
import QuizScreen from '../../src/screens/Quiz';

export default function MyQuiz() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen db={db} />
    </ThemeProvider>
  );
}
