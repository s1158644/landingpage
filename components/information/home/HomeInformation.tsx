import ContactModal from '@/components/modals/contact/ContactModal';

export interface IHomeInformation {}

const HomeInformation: React.FC<IHomeInformation> = () => {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-green-600 dark:from-green-500"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-green-600"></div>
      </div>
      <div className="relative pt-36 ml-auto">
        <div className="lg:w-2/3 text-center mx-auto">
          <h1 className="text-gray-900 dark:text-white font-bold text-4xl md:text-6xl lg:text-7xl">
            Krijg grip op je feedback management en{' '}
            <span className="text-primary">verbeter klanttevredenheid.</span>
          </h1>
          <p className="mt-8 text-gray-700 dark:text-gray-300">
            Bij FeedbackFlow geloven we dat effectief feedbackbeheer cruciaal is
            voor het verbeteren van de klanttevredenheid en het stimuleren van
            bedrijfsgroei. Ons platform stroomlijnt het feedbackproces, waardoor
            het voor u gemakkelijker dan ooit is om feedback van klanten te
            verzamelen en te analyseren, belangrijke inzichten te identificeren
            en actie te ondernemen om uw klantervaring te verbeteren. Met onze
            krachtige functies, intuïtieve interface en datagestuurde inzichten
            stelt FeedbackFlow u in staat om slimmere beslissingen te nemen,
            sterkere relaties met uw klanten op te bouwen en uiteindelijk uw
            doelen te bereiken.
          </p>
          <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
            <ContactModal />
            <a
              href="#features"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span className="relative text-base font-semibold text-primary dark:text-white">
                Meer info
              </span>
            </a>
          </div>
          <div className="py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
            <div className="text-left mt-2">
              <h1 className="text-lg font-semibold text-gray-700 dark:text-white ml-1">
                Datagedreven
              </h1>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Ons platform biedt waardevolle inzichten op basis van
                klantfeedbackgegevens, waardoor u weloverwogen zakelijke
                beslissingen kunt nemen om de klanttevredenheid en loyaliteit te
                verbeteren.
              </p>
            </div>
            <div className="text-left mt-2">
              <h1 className="text-lg font-semibold text-gray-700 dark:text-white ml-1">
                Schaalbaar
              </h1>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Ons platform is ontworpen om met je bedrijf mee te groeien en
                biedt de flexibiliteit en schaalbaarheid die je nodig hebt om
                feedback van een toenemend aantal klanten te beheren.
              </p>
            </div>
            <div className="text-left mt-2">
              <h1 className="text-lg font-semibold text-gray-700 dark:text-white ml-1">
                Gebruikers vriendelijk
              </h1>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Ons platform heeft een gebruiksvriendelijke interface, waardoor
                het beheren van klantfeedback en het verbeteren van uw
                klantervaring moeiteloos wordt voor uw team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInformation;
