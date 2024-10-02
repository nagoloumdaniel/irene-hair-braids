import React from 'react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Social from './SocialMediaButtons';

const Contact = () => {
  return (
    <div className="mt-10 relative isolate " id='contact'>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-50  lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="pattern"
                    width="200"
                    height="200"
                    x="100%"
                    y="-1"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth="0" fill="white"></rect>
                <svg x="100%" y="-1" className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth="0"></path>
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth="0"
                  fill="url(#pattern)"
                ></rect>
              </svg>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Contact Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Feel free to reach out to us for any inquiries or assistance. We're here to help!
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:irenebraiding17@gmail.com"
                  >
                    irenebraiding17@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Phone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a 
                    className="hover:text-gray-900"
                    href="tel:2147143124"
                  >
                    214 714 3124
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <MapPinIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a 
                    className="hover:text-gray-900"
                    href="https://maps.app.goo.gl/8wWd36k12xjfLqqq8"
                  >
                    Forney, Tx
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <br />
                  <span className="sr-only">social</span>
                  <Social />
                </dt>
              </div>
            </dl>
          </div>
        </div>

        {/* Carte responsive */}
        <div className="sm:px-6 pb-10 pt-10 lg:pt-0 lg:static lg:pb-0 lg:pr-0 lg:pl-0 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53693.799514810315!2d-96.48488998668206!3d32.74284240548614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ead96771cce91%3A0x1a100508f9b9472e!2sForney%2C%20Texas%2075126%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2scm!4v1727076257925!5m2!1sfr!2scm"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-lg h-96 w-full lg:h-full lg:w-full"
          ></iframe>
        </div>
      </div>
    </div>

  );
};

export default Contact;
