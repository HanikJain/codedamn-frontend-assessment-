// code from "https://betterprogramming.pub/prevent-route-changes-and-unsaved-data-loss-in-next-js-f93622d73791"

import SingletonRouter, { Router } from 'next/router';
import { useEffect } from 'react';

const defaultConfirmationDialog = async (msg) => window.confirm(msg);

export const useLeavePageConfirmation = (
    shouldPreventLeaving,
    message = 'Changes you made may not be saved.',
    confirmationDialog = defaultConfirmationDialog
) => {
    useEffect(() => {
        if (!SingletonRouter.router?.change) {
            return;
        }

        const originalChangeFunction = SingletonRouter.router.change;
        const originalOnBeforeUnloadFunction = window.onbeforeunload;

        if (shouldPreventLeaving) {
            window.onbeforeunload = () => '';
        } else {
            window.onbeforeunload = originalOnBeforeUnloadFunction;
        }

        if (shouldPreventLeaving) {
            SingletonRouter.router.change = async (...args) => {
                const [historyMethod, , as] = args;
                const currentUrl = SingletonRouter.router?.state.asPath.split('?')[0];
                const changedUrl = as.split('?')[0];
                const hasNavigatedAwayFromPage = currentUrl !== changedUrl;
                const wasBackOrForwardBrowserButtonClicked = historyMethod === 'replaceState';
                let confirmed = false;

                if (hasNavigatedAwayFromPage) {
                    confirmed = await confirmationDialog(message);
                }

                if (confirmed) {
                    Router.prototype.change.apply(SingletonRouter.router, args);
                } else if (wasBackOrForwardBrowserButtonClicked && hasNavigatedAwayFromPage) {

                    await SingletonRouter.router?.push(SingletonRouter.router?.state.asPath);
                    const browserDirection = 'back';

                    browserDirection === 'back'
                        ? history.go(1) // back button
                        : history.go(-1); // forward button
                }
            };
        }

        return () => {
            SingletonRouter.router.change = originalChangeFunction;
            window.onbeforeunload = originalOnBeforeUnloadFunction;
        };
    }, [shouldPreventLeaving, message, confirmationDialog]);
};