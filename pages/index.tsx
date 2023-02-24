import PricingCard from '../components/cards/pricing/PricingCard';
import { mockPricingCardProps } from '../components/cards/pricing/PricingCard.mocks';
import FeatureInformation from '../components/information/features/FeatureInformation';
import HomeInformation from '../components/information/home/HomeInformation';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <main className="space-y-40 mb-40">
      <HomeInformation />
      <FeatureInformation />
      <PricingCard {...mockPricingCardProps.base} />
    </main>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
