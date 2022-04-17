import React from 'react';
import { Result } from './components/result';
import { Selection } from './components/selection';
import { useGetPollData } from './hooks/use-get-poll-data';

export const Poll = ({ config, pollId }) => {
    const { error, question, options, updateVote, isVoted } = useGetPollData({ config, pollId });

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="bg-white pb-6 text-gray-600 rounded-lg shadow-lg border w-fit max-w-md dark:bg-slate-800 dark:text-gray-400">
            <h4 className="ml-6 pr-6 text-gray-700 dark:text-gray-300 py-3 text-xl font-bold mb-2 border-b border-yellow-300 dark:border-yellow-300">
                {question}
            </h4>
            {isVoted ? (
                <Result options={options} />
            ) : (
                <Selection options={options} onClick={updateVote} />
            )}
        </div>
    );
};
