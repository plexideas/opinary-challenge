import React from 'react';

export const Selection = ({ options, onClick }) => {
    return (
        <div className="flex flex-col">
            {options.map(({ id, optionText }) => (
                <button
                    className="py-2 px-6 text-left rounded-lg hover:font-medium	hover:text-gray-800 dark:hover:text-gray-300 hover:scale-105 transition ease-in-out transform duration-500"
                    key={id}
                    onClick={() => onClick(id)}
                >
                    {optionText}
                </button>
            ))}
        </div>
    );
};
