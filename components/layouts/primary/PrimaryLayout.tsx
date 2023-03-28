import Head from 'next/head';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>Krijg grip op je feedback management | FeedbackFlow</title>
        <meta
          name="description"
          content="Bij FeedbackFlow geloven we dat effectief feedbackbeheer cruciaal is voor het verbeteren van de klanttevredenheid en het stimuleren van bedrijfsgroei. Ons platform stroomlijnt het feedbackproces, waardoor het voor u gemakkelijker dan ooit is om feedback van klanten te verzamelen en te analyseren, belangrijke inzichten te identificeren en actie te ondernemen om uw klantervaring te verbeteren."
          key="desc"
        />
      </Head>
      <div
        {...divProps}
        className={`min-h-screen flex flex-col ${justify} bg-white dark:bg-gray-900`}
      >
        <Header />
        <main className="px-5">{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
