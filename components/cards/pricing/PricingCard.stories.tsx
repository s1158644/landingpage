import { ComponentStory, ComponentMeta } from '@storybook/react';
import PricingCard, { IPricingCard } from './PricingCard';
import { mockPricingCardProps } from './PricingCard.mocks';

export default {
  title: 'cards/PricingCard',
  component: PricingCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PricingCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PricingCard> = (args) => (
  <PricingCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPricingCardProps.base,
} as IPricingCard;