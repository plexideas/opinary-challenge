import React from 'react';

export const Card = ({ title, children }) => (
    <div className="bg-white pb-6 text-gray-600 rounded-lg shadow-lg border w-fit max-w-md dark:bg-slate-800 dark:text-gray-400">
        <h4 className="ml-6 pr-6 text-gray-700 dark:text-gray-300 py-3 text-xl font-bold mb-2 border-b border-yellow-300 dark:border-yellow-300">
            {title}
        </h4>
        {children}
    </div>
);
