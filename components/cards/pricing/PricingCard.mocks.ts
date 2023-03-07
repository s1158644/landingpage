import { IPricingCard } from './PricingCard';

const base: IPricingCard = {
  pricingCards: [
    {
      key: 1,
      title: 'Test Klant',
      description:
        'Begin bij FeedbackFlow als testklant en maak gebruik van onze standaardfuncties. Door ons waardevolle feedback te geven, help je ons om te verbeteren en de kwaliteit van onze diensten te verhogen.',
      price: 10,
      features: [
        'Gebruiksvriendelijke interface',
        'Toegang to standaard features',
      ],
    },
    {
      key: 2,
      title: 'Standaard',
      description:
        'Ons standaardpakket biedt alles wat je nodig hebt om grip te krijgen op je feedback management. Maak gebruik van onze gebruiksvriendelijke interface om gemakkelijk feedback te verzamelen en optimaliseer je feedbackproces.',
      price: 50,
      features: [
        'Gebruiksvriendelijke interface',
        'Toegang to standaard feature',
      ],
    },
    {
      key: 3,
      title: 'Premium',
      description:
        'Breng je feedbackbeheer naar een hoger niveau met ons premiumplan. Geniet van een op maat gemaakt dashboard met gepersonaliseerde functies en de nieuwste mogelijkheden om je feedback te analyseren en te verbeteren.',
      price: 75,
      features: [
        'Gebruiksvriendelijke interface',
        'Toegang to alle features',
        'Maatwerk voor uw dashboard',
        'Demos en uitleg over nieuwe features',
      ],
    },
  ],
};

export const mockPricingCardProps = {
  base,
};
