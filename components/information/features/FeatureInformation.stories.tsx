import { ComponentMeta, ComponentStory } from '@storybook/react';
import FeatureInformation, { IFeatureInformation } from './FeatureInformation';
import { mockFeatureInformationProps } from './FeatureInformation.mocks';

export default {
  title: 'information/FeatureInformation',
  component: FeatureInformation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FeatureInformation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeatureInformation> = (args) => (
  <FeatureInformation {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFeatureInformationProps.base,
} as IFeatureInformation;
