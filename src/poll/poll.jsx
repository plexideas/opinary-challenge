import React from 'react';
import { Card } from './components/card';
import { Error } from './components/error';
import { Result } from './components/result';
import { Selection } from './components/selection';
import { ERROR_TITLE } from './configs';
import { useGetPollData } from './hooks/use-get-poll-data';

export const Poll = ({ config, pollId }) => {
    const { error, question, options, updateVote, isVoted } = useGetPollData({ config, pollId });

    if (error) {
        return (
            <Card title={ERROR_TITLE}>
                <Error errorMessage={error.message} />
            </Card>
        );
    }

    return (
        <Card title={question}>
            {isVoted ? (
                <Result options={options} />
            ) : (
                <Selection options={options} onClick={updateVote} />
            )}
        </Card>
    );
};
