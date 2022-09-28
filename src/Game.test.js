import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Game from './Game';

test('renders learn react link', async () => {
  const {getByText} = render(<Game />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText('White Turn')).toBeInTheDocument()
});
