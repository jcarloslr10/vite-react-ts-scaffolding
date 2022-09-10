import React from 'react'
import { ComponentStoryFn, ComponentMeta } from '@storybook/react'

import App from './App'

export default {
  title: 'Components/App',
  component: App,
} as ComponentMeta<typeof App>

const Template: ComponentStoryFn<typeof App> = () => <App />

export const Default = Template.bind({})
