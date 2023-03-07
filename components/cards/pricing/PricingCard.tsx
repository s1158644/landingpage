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
      <div className="flex flex-col items-center justify-center px-5 mx-auto sm:px-24 lg:px-40">
        <div className="flex flex-col w-full mb-12 text-left lg:text-center">
          <p className="mx-auto text-base font-semibold tracking-wide text-blue-600 uppercase">
            Awesome Feature
          </p>
          <h2 className="mx-auto text-3xl font-bold tracking-wide text-gray-700 dark:text-white md:text-4xl">
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
                <p className="my-1 text-2xl font-bold contents text-gray-700 dark:text-white md:text-4xl group-hover:text-secondary">
                  €{card.price}
                </p>
                <a className="contents text-gray-700 dark:text-gray-300">/mo</a>
                <div className="flex items-center justify-center mt-6">
                  <ContactModal />
                </div>
                {/* <button className="text-white bg-blue-500 border-0 py-2 px-6 mt-5 focus:outline-none hover:bg-blue-600 rounded">
                  CONTACTEER ONS
                </button> */}
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
