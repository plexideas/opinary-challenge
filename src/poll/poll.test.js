import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Poll } from './poll';
import { CONFIG_NOT_DEFINED, ERROR_TITLE } from './configs';

describe('Poll', () => {
    const config = `{
        "id": "poll-2",
        "question": "How you like the Opinary test?",
        "options": [
            "It was great and so challenging",
            "Not bad, but you can improve",
            "It was a nightmare, never again"
        ]
    }`;

    const firstAnswer = 'It was great and so challenging';

    test('Should render Poll', async () => {
        render(<Poll config={config} />);

        expect(screen.getByText(firstAnswer)).toBeInTheDocument();

        const btn = screen.getByRole('button', {
            name: firstAnswer,
        });
        fireEvent.click(btn);

        expect(screen.getByText(1)).toBeInTheDocument();
    });

    test('Should render Poll with Errorr', async () => {
        render(<Poll config={''} />);

        expect(screen.queryByText(firstAnswer)).not.toBeInTheDocument();

        expect(screen.getByText(ERROR_TITLE)).toBeInTheDocument();
        expect(screen.getByText(CONFIG_NOT_DEFINED)).toBeInTheDocument();
    });
});
