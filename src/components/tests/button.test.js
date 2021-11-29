import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import { IntlProviders } from '../../utils/testUtils';
import { Button } from '../button';

afterEach(cleanup);

it('Button component', () => {
  const handleTestClick = jest.fn();

  const { getByText } = render(
    <IntlProviders>
      <Button
        onClick={handleTestClick}
      >
        Test Button
      </Button>
    </IntlProviders>
  );
  expect(getByText(/test button/i)).toBeInTheDocument();
  expect(handleTestClick).toHaveBeenCalledTimes(0);
  fireEvent.click(getByText(/test button/i));
  expect(handleTestClick).toHaveBeenCalledTimes(1);
});
