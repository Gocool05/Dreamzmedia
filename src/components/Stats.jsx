import React, { useEffect, useState } from 'react';

const CounterCard = ({ title, suffix,count }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Duration of animation in milliseconds
    const increment = Math.ceil(count / (duration / 10));
    let interval;

    const animateCountUp = () => {
      interval = setInterval(() => {
        setCurrentCount(prevCount => {
          if (prevCount + increment >= count) {
            clearInterval(interval);
            return count;
          }
          return prevCount + increment;
        });
      }, 10);
    };

    animateCountUp();

    return () => clearInterval(interval);
  }, [count]);


  return (
    <div className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">{title}</dt>
      <dd className="order-1 text-5xl font-extrabold leading-none text-gold ">
        {currentCount}{suffix}
      </dd>
    </div>
  );
};

const Stats = () => {
    const targets = [
      { title: 'Years of Experience', count: 16, suffix: '+' },
      { title: 'Happy Customers', count: 100, suffix: '+' },
      { title: 'Projects Done', count: 250, suffix: '+' }
      ];
    
      return (
        <div className="h-auto Bg2">
          <div className="pt-12  dark:bg-gray-900 sm:pt-20">
            <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-xl font-extrabold leading-9 text-gold lg:text-5xl sm:leading-10">
                  Trusted by Many
                </h2>
                <p className="mt-3 text-xl leading-7 text-gray-lite dark:text-gray-400 sm:mt-4">
                Our platform fuels numerous successful events across various venues and occasions.
                </p>
              </div>
            </div>
            <div className="pb-12 mt-10  dark:bg-gray-900 sm:pb-16">
              <div className="relative">
                <div className="absolute inset-0 h-1/2  dark:bg-gray-900"></div>
                <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto">
                    <dl className="bg-gray-dark dark:bg-gray-800 rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                      {targets.map((target, index) => (
                        <CounterCard key={index} title={target.title} suffix={target.suffix} count={target.count}  />
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Stats;
