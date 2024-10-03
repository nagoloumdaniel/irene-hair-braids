import React, { useEffect, useRef } from 'react';
import './InfiniteScrollAnimation.css'; // Import du CSS personnalisé

const InfiniteScrollAnimation = () => {
  const scrollerRefs = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!prefersReducedMotion) {
      addAnimation();
    }

    function addAnimation() {
      scrollerRefs.current.forEach((scroller) => {
        if (scroller) {
          scroller.setAttribute('data-animated', true);

          const scrollerInner = scroller.querySelector('.scroller__inner');
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-primary-800">
      <div
        className="scroller max-w-full md:max-w-xl overflow-x-auto"
        data-speed="fast"
        ref={(el) => (scrollerRefs.current[0] = el)}
      >
        <ul className="tag-list scroller__inner flex flex-nowrap md:flex-wrap gap-4 p-4">
          <li className="bg-pink-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Microlocs
          </li>
          <li className="bg-pink-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Knotless Braids
          </li>
          <li className="bg-pink-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Box Braids
          </li>
          <li className="bg-pink-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Cornrows
          </li>
          <li className="bg-pink-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Passion Twist
          </li>
        </ul>
      </div>

      
      <div
        className="scroller w-full mt-8 mb-10"
        data-direction="right"
        data-speed="slow"
        ref={(el) => (scrollerRefs.current[1] = el)}
      >
        <div className="scroller__inner flex flex-wrap gap-4 p-4">
        <img
            src="/Hairstyle/1.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover "
          />
          <img
            src="/Hairstyle/2.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Hairstyle/3.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Hairstyle/4.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Hairstyle/5.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Hairstyle/6.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Hairstyle/7.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Hairstyle/8.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Hairstyle/9.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Hairstyle/10.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Hairstyle/11.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Hairstyle/12.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Hairstyle/13.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Hairstyle/14.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />

        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollAnimation;
