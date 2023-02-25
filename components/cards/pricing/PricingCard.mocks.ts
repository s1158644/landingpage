import { IPricingCard } from './PricingCard';

const base: IPricingCard = {
  pricingCards: [
    {
      key: 1,
      title: 'Test Drive',
      description:
        'Get started with FeedbackFlow by signing up for our Test Drive package. Provide us with your valuable feedback and help us improve our service while experiencing the benefits of our basic features.',
      price: 10,
      features: ['Access to basic features'],
    },
    {
      key: 2,
      title: 'Standard',
      description:
        'Our Standard package offers everything you need to streamline your feedback management process. Benefit from our user-friendly interface, data-driven insights, and customer satisfaction improvements.',
      price: 50,
      features: ['Full access to all standard features'],
    },
    {
      key: 3,
      title: 'Premium',
      description:
        'Elevate your feedback management with our Premium package. You will get all our standard features plus regular updates and on-site training to stay up-to-date with the latest offerings.',
      price: 75,
      features: [
        'Full access to all features',
        'On-site demos and training for new features',
      ],
    },
  ],
};

export const mockPricingCardProps = {
  base,
};
