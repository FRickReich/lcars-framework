module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/**/*.stories.@(js|jsx|ts|tsx)',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    // addons: [
    //     'storybook-dark-mode',
    //     'storybook-color-picker',
    //     '@storybook/addon-outline',
    //     '@storybook/addon-viewport',
    //     '@storybook/addon-coverage',
    //     'storybook-addon-whats-new',
    // ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-create-react-app',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    // features: {
    //     interactionsDebugger: true,
    // },
};
