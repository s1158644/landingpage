import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomeInformation, { IHomeInformation } from './HomeInformation';
import { mockHomeInformationProps } from './HomeInformation.mocks';

export default {
  title: 'information/HomeInformation',
  component: HomeInformation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HomeInformation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomeInformation> = (args) => (
  <HomeInformation {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHomeInformationProps.base,
} as IHomeInformation;
