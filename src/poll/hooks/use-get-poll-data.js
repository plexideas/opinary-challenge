import { useEffect, useState } from 'react';
import { CONFIG_NOT_DEFINED, OPTIONS_NOT_DEFINED, QUESTION_NOT_DEFINED } from '../configs';

/**
 *
 * Hook needs to load initial config and data from localStorage.
 * The hook provides methods and properties to work with a poll.
 */
export const useGetPollData = ({ config, pollId }) => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [error, setError] = useState('');
    const [isVoted, setIsVoted] = useState(false);

    useEffect(() => {
        try {
            if (!config) {
                throw new Error(CONFIG_NOT_DEFINED);
            }

            const parserdConfig = JSON.parse(config);

            if (!parserdConfig) {
                throw new Error(CONFIG_NOT_DEFINED);
            }

            if (!parserdConfig.question) {
                throw new Error(QUESTION_NOT_DEFINED);
            }

            if (!parserdConfig.options || parserdConfig.options.length < 1) {
                throw new Error(OPTIONS_NOT_DEFINED);
            }

            const pollResult = JSON.parse(localStorage.getItem(pollId));

            const preparedOptions = parserdConfig.options.map((option, index) => ({
                id: index,
                optionText: option,
                votes: (pollResult && pollResult[index]) || 0,
            }));

            setQuestion(parserdConfig.question);
            setOptions(preparedOptions);
        } catch (error) {
            setError(error);
        }
    }, [config, pollId]);

    const updateVote = optionId => {
        const option = options.find(({ id }) => id === optionId);
        option.votes++;
        options[optionId] = option;

        const pollResult = options.map(({ votes }) => votes);
        localStorage.setItem(pollId, JSON.stringify(pollResult));

        setOptions(options);
        setIsVoted(true);
    };

    return {
        error,
        question,
        options,
        updateVote,
        isVoted,
    };
};
