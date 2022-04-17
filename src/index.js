import React from 'react';
import { createRoot } from 'react-dom/client';

import { hashCode } from './utils/hash-code';
import { Poll } from './poll';
import './styles.css';

const widgetContainers = document.querySelectorAll('.opinary-poll-widget');
const widgetConfigList = []; // contains all loaded widget configs in the app / page

widgetContainers.forEach(container => {
    const widget = createRoot(container);
    const config = container.getAttribute('data-config');

    if (config) {
        const pollId = hashCode(config);
        const pathname = window && window.localStorage;

        /**
         * Check existing poll with same config in the same page
         */
        const isWidgetLoad = widgetConfigList.find(
            widgetConfig => widgetConfig.pollId === pollId && widgetConfig.pathname === pathname
        );

        /**
         * If we don't have the same widget configs in this very page, we create new widget and add to page
         * If we have same widget configs in the same page, we skip iteratoin.
         */
        if (!isWidgetLoad) {
            // Add poll id into the list to check doublicates in the future
            widgetConfigList.push({ pollId, pathname });

            widget.render(
                <React.StrictMode>
                    <Poll config={config} pollId={pollId} />
                </React.StrictMode>
            );
        }
    }
});
