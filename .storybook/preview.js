export const parameters = {
    // viewMode: 'docs',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    // backgrounds: {
    //     default: 'dark',
    //     values: [
    //         {
    //             name: 'dark',
    //             value: '#000000',
    //         },
    //         {
    //             name: 'light',
    //             value: '#ffffff',
    //         },
    //     ],
    // },
};
