import React from 'react';
import { render, screen } from '@testing-library/react';
import { Selection } from './selection';

describe('Selection', () => {
    const options = [
        {
            id: 0,
            optionText: 'Text 1',
            votes: 0,
        },
        {
            id: 1,
            optionText: 'Text 2',
            votes: 5,
        },
        {
            id: 2,
            optionText: 'Text 3',
            votes: 3,
        },
    ];

    render(<Selection options={options} onClick={id => id} />);

    test('Should render Selection', async () => {
        options.forEach(({ optionText, votes }) => {
            expect(screen.getByText(optionText)).toBeInTheDocument();
        });
    });
});
