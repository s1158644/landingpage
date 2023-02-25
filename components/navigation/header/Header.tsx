import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './Header.module.css';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  const { theme, setTheme } = useTheme();

  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className="flex w-full flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
        <input
          aria-hidden="true"
          type="checkbox"
          name="toggle_nav"
          id="toggle_nav"
          className="hidden peer"
          onClick={toggleNav}
        />
        <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
          <Link
            href="/"
            aria-label="logo"
            className="flex space-x-2 items-center"
          >
            <div className="flex space-x-1 ml-5">
              {/* <Image
                //src="/FeedbackFlow-Logo-Darkmode.svg"
                src="/Logo-poppins-light.svg"
                alt="logo"
                width={200}
                height={30}
                className="hidden dark:block"
              />
              <Image
                //src="/FeedbackFlow-Logo.svg"
                src="/Logo-poppins-dark.svg"
                alt="logo"
                width={200}
                height={30}
                className="dark:hidden"
              /> */}
              <Image
                src="/FeedbackFlow-Logo-Only.svg"
                alt="logo"
                width={60}
                height={60}
              />
              <div className="flex flex-col justify-center">
                <div className="flex flex-row items-center mt-2">
                  <div className="text-2xl font-bold text-green-600">
                    Feedback
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Flow
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="relative flex items-center lg:hidden max-h-10">
            <label
              htmlFor="toggle_nav"
              aria-label="humburger"
              id="hamburger"
              className="relative p-6 -ml-6"
            >
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div
                    id="line"
                    className={
                      'bg-white m-auto h-0.5 w-6 rounded transition duration-30' +
                      (isNavOpen
                        ? ' rotate-45 -translate-x-0.5 translate-y-1'
                        : '')
                    }
                  ></div>
                  <div
                    id="line2"
                    className={
                      'bg-white m-auto h-0.5 w-6 rounded transition duration-300' +
                      (isNavOpen
                        ? ' -rotate-45 -translate-y-1.5 -translate-x-0.5'
                        : '')
                    }
                  ></div>
                </div>
              </div>
            </label>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"
        ></div>

        <div
          className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute left-0 transition-all duration-300 scale-95 origin-top
          lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 dark:lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
          top-full lg:top-0
          peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none
          dark:shadow-none dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="text-gray-600 dark:text-gray-300 lg:pr-10 lg:w-auto w-full lg:pt-0">
            <ul className="tracking-wide font-semibold lg:text-xl flex-col flex lg:flex-row gap-6 lg:gap-0">
              <li>
                <Link
                  className="block md:px-4 hover:text-green-500 dark:hover:text-green-500 text-slate-800 dark:text-white text-xl"
                  href="#features"
                  onClick={() => {
                    document.getElementById('toggle_nav')?.click();
                  }}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="block md:px-4 hover:text-green-500 dark:hover:text-green-500 text-slate-800 dark:text-white text-xl"
                  href="#pricingcard"
                  onClick={() => {
                    document.getElementById('toggle_nav')?.click();
                  }}
                >
                  Pricing
                </Link>
              </li>
              <div className="w-14 h-8">
                <input
                  type="checkbox"
                  id="dark-mode-toggle"
                  className="hidden"
                  onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                />
                <label
                  htmlFor="dark-mode-toggle"
                  className="w-full h-full bg-gray-800 dark:bg-white rounded-full p-1 flex justify-between cursor-pointer"
                >
                  <span className="inline dark:hidden">🌞</span>
                  <span className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 block float-right dark:float-left"></span>
                  <span className="hidden dark:inline">🌛</span>
                </label>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
