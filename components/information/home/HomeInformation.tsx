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
          <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
            Streamline your feedback management and{' '}
            <span className="text-primary">improve customer satisfaction.</span>
          </h1>
          <p className="mt-8 text-gray-700 dark:text-gray-300">
            At FeedbackFlow, we believe that effective feedback management is
            crucial to improving customer satisfaction and driving business
            growth. Our platform streamlines the feedback process, making it
            easier than ever for you to gather and analyze customer feedback,
            identify key insights, and take action to improve your customer
            experience. With our powerful features, intuitive interface, and
            data-driven insights, FeedbackFlow empowers you to make smarter
            decisions, build stronger relationships with your customers, and
            ultimately, achieve your business goals.
          </p>
          <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
            <a
              href="#"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white">
                Get started
              </span>
            </a>
            <a
              href="#features"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span className="relative text-base font-semibold text-primary dark:text-white">
                Learn more
              </span>
            </a>
          </div>
          <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
            <div className="text-left">
              <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                Data-driven insights
              </h6>
              <p className="mt-2 text-gray-500">
                Our platform provides valuable insights based on customer
                feedback data, helping you make informed business decisions to
                improve customer satisfaction and loyalty.
              </p>
            </div>
            <div className="text-left">
              <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                Scalable
              </h6>
              <p className="mt-2 text-gray-500">
                Our platform is designed to grow with your business, providing
                the flexibility and scalability you need to manage feedback from
                an increasing number of customers.
              </p>
            </div>
            <div className="text-left ml-2">
              <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                User-Friendly Interface
              </h6>
              <p className="mt-2 text-gray-500">
                Our platform features an intuitive and easy-to-use interface,
                making managing customer feedback and improving your customer
                experience effortless for your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInformation;
