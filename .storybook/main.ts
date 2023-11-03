// .storybook/main.ts

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-webpack5)
import { type StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {

  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  features: {
    "storyStoreV7": true
  },
}

export default config;