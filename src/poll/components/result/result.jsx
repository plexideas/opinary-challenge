import React from 'react';
import { getVotesInPercent } from './helper/vote-in-percent';

export const Result = ({ options }) => {
    const max = options.reduce((max, current) => (current.votes > max ? current.votes : max), 0);

    return (
        <div>
            {options.map(({ id, optionText, votes }) => (
                <div key={id} className="py-2 px-6 flex flex-col justify-center">
                    <div className="flex justify-between">
                        <div className="text-xs pb-2 dark:text-gray-300">{optionText}</div>
                        <div className="text-xs pb-2 dark:text-gray-300">{votes}</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                            className="bg-yellow-300 h-2.5 rounded-full"
                            style={{ width: `${getVotesInPercent({ votes, max })}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};
