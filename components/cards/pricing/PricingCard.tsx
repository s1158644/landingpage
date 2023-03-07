import ContactModal from '@/components/modals/contact/ContactModal';
import React from 'react';
import { CheckIcon } from '../../icons/CheckIcon';

export interface IPricingCard {
  pricingCards: {
    key: number;
    title: string;
    description: string;
    price: number;
    features: string[];
  }[];
}

const PricingCard: React.FC<IPricingCard> = ({ pricingCards }) => {
  return (
    <div id="pricingcard">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-green-600"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-br from-primary to-green-600 dark:from-green-500"></div>
      </div>

      <div className="flex flex-col items-center justify-center px-5 mx-auto sm:px-24 lg:px-40">
        <div className="flex flex-col w-full mb-12 text-left lg:text-center">
          <h2 className="mx-auto text-3xl font-bold tracking-wide text-gray-800 dark:text-white md:text-4xl">
            Flexibele abonnementen
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {pricingCards.map((card, index) => (
            <div key={index} className="p-4 lg:w-1/3">
              <div className="group h-full p-6 rounded-lg border-2 border-gray-600 flex flex-col relative overflow-hidden bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 ">
                <p className="my-1 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl group-hover:text-secondary">
                  {card.title}
                </p>
                <p className="flex items-center text-gray-600 mb-4">
                  <span className="text-base">{card.description}</span>
                </p>
                {/* <p className="my-1 text-2xl font-bold contents text-gray-700 dark:text-white md:text-4xl group-hover:text-secondary">
                  €{card.price}
                </p>
                <a className="contents text-gray-700 dark:text-gray-300">/mo</a> */}
                <div className="flex items-center justify-center mt-6">
                  <ContactModal />
                </div>
                <hr className="my-6 border-gray-300 dark:border-gray-700" />
                <div className="absolute h-0.5 inset-x-0 bottom-0 bg-gray-300 dark:bg-gray-700"></div>
                <ul className="flex-grow mt-2 text-base text-gray-500">
                  {card.features.map((feature, index) => (
                    <li key={index} className="inline-flex items-center">
                      <CheckIcon />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
