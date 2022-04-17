import React from 'react';
import { render, screen } from '@testing-library/react';
import { Error } from './error';

describe('Error', () => {
    const message = 'hello world';

    test('Should render Error', async () => {
        render(<Error errorMessage={message} />);
        expect(screen.getByText(message)).toBeInTheDocument();
    });
});
