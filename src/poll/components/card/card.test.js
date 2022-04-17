import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './card';

describe('Card', () => {
    const title = 'some-title';
    const content = 'hello world';

    test('Should render Card', async () => {
        render(
            <Card title={title}>
                <div>{content}</div>
            </Card>
        );
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(content)).toBeInTheDocument();
    });
});
