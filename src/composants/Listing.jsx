import React, { useState } from 'react';
import './imgzoom.css'; // Assume que tu as déjà le style pour le zoom

function Listing() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Stocker l'image sélectionnée

  // Fonction pour ouvrir le modal
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null); // Réinitialiser l'image sélectionnée
  };

  // Fonction pour fermer le modal lorsqu'on clique à l'extérieur de l'image
  const handleClickOutside = (e) => {
    if (e.target.id === 'modalBackground') {
      closeModal();
    }
  };

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-center font-bold text-3xl min-[400px]:text-4xl text-black mb-20 max-lg:text-center">
          Book an appointment
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Première image */}
          <a
            className="max-w-[384px] mx-auto hover:text-pink-500 group transition-all duration-500 zoom"
          >
            <div className="w-full max-w-sm aspect-square">
              <img
                src="/Hairstyle/1.jpg"
                alt="Passion Twist"
                className="w-full h-full rounded-xl object-cover cursor-pointer"
                onClick={() => openModal('/Hairstyle/1.jpg')}
              />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <h6 className="font-medium text-xl leading-8 text-black group-hover:text-pink-600 transition-all duration-500 zoom">
                  Passion Twist
                </h6>
              </div>
              {/* Bouton */}
              <button className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 zoom hover:shadow-gray-200 hover:border-pink-400 hover:bg-gray-50">
                <a href="tel:2147143124">
                  <svg
                    width="26px"
                    height="26px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" fill="white" />
                    <path
                      d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
                      stroke="#000000"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
                      stroke="#000000"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </a>
          <a
            className="max-w-[384px] mx-auto hover:text-pink-500 group transition-all duration-500 zoom"
            >
            <div className="w-full max-w-sm aspect-square">
              <img
                src="/Hairstyle/4.jpg"
                alt="Box Braids"
                className="w-full h-full rounded-xl object-cover cursor-pointer"
                onClick={() => openModal('/Hairstyle/4.jpg')}
              />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <h6 className="font-medium text-xl leading-8 text-black group-hover:text-pink-600 transition-all duration-500 zoom">
                  Box Braids
                </h6>
              </div>
              {/* Bouton */}
              <button className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 zoom hover:shadow-gray-200 hover:border-pink-400 hover:bg-gray-50">
                <a href="tel:2147143124">
                  <svg
                    width="26px"
                    height="26px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" fill="white" />
                    <path
                      d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
                      stroke="#000000"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
                      stroke="#000000"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </a>
          <a
            className="max-w-[384px] mx-auto hover:text-pink-500 group transition-all duration-500 zoom"
          >
            <div className="w-full max-w-sm aspect-square">
              <img
                src="/Hairstyle/13.jpg"
                alt="Cornrows"
                className="w-full h-full rounded-xl object-cover cursor-pointer"
                onClick={() => openModal('/Hairstyle/13.jpg')}
              />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <h6 className="font-medium text-xl leading-8 text-black group-hover:text-pink-600 transition-all duration-500 zoom">
                  Cornrows
                </h6>
              </div>
              {/* Bouton */}
              <button className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 zoom hover:shadow-gray-200 hover:border-pink-400 hover:bg-gray-50">
                <a href="tel:2147143124">
                  <svg
                    width="26px"
                    height="26px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" fill="white" />
                    <path
                      d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
                      stroke="#000000"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
                      stroke="#000000"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </a>
          <a
            className="max-w-[384px] mx-auto hover:text-pink-500 group transition-all duration-500 zoom"
            >
            <div className="w-full max-w-sm aspect-square">
              <img
                src="/Hairstyle/11.jpg"
                alt="Knotless Braids"
                className="w-full h-full rounded-xl object-cover cursor-pointer"
                onClick={() => openModal('/Hairstyle/11.jpg')}
              />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <h6 className="font-medium text-xl leading-8 text-black group-hover:text-pink-600 transition-all duration-500 zoom">
                  Knotless Braids
                </h6>
              </div>
              {/* Bouton */}
              <button className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 zoom hover:shadow-gray-200 hover:border-pink-400 hover:bg-gray-50">
                <a href="tel:2147143124">
                  <svg
                    width="26px"
                    height="26px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" fill="white" />
                    <path
                      d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
                      stroke="#000000"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
                      stroke="#000000"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </a>
          <a
            className="max-w-[384px] mx-auto hover:text-pink-500 group transition-all duration-500 zoom"
            >
            <div className="w-full max-w-sm aspect-square">
              <img
                src="/Hairstyle/14.jpg"
                alt="Microlocs"
                className="w-full h-full rounded-xl object-cover cursor-pointer"
                onClick={() => openModal('/Hairstyle/14.jpg')}
              />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <h6 className="font-medium text-xl leading-8 text-black group-hover:text-pink-600 transition-all duration-500 zoom">
                  Microlocs
                </h6>
              </div>
              {/* Bouton */}
              <button className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 zoom hover:shadow-gray-200 hover:border-pink-400 hover:bg-gray-50">
                <a href="tel:2147143124">
                  <svg
                    width="26px"
                    height="26px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" fill="white" />
                    <path
                      d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
                      stroke="#000000"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
                      stroke="#000000"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </a>
          <a
            className="max-w-[384px] mx-auto hover:text-pink-500 group transition-all duration-500 zoom"
            >
            <div className="w-full max-w-sm aspect-square">
              <img
                src="/Hairstyle/6.jpg"
                alt="Medium Braids"
                className="w-full h-full rounded-xl object-cover cursor-pointer"
                onClick={() => openModal('/Hairstyle/6.jpg')}
              />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <h6 className="font-medium text-xl leading-8 text-black group-hover:text-pink-600 transition-all duration-500 zoom">
                  Medium Braids
                </h6>
              </div>
              {/* Bouton */}
              <button className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 zoom hover:shadow-gray-200 hover:border-pink-400 hover:bg-gray-50">
                <a href="tel:2147143124">
                  <svg
                    width="26px"
                    height="26px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" fill="white" />
                    <path
                      d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
                      stroke="#000000"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
                      stroke="#000000"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </a>
          {/* Ajoute d'autres images ici comme précédemment */}

        </div>
      </div>

      {/* Modal pour afficher l'image en plein écran */}
      {isOpen && (
        <div
          id="modalBackground"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleClickOutside}
        >
          <div className="bg-white p-4 rounded-lg max-h-[80%]">
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-w-[50%] mx-auto object-cover cursor-pointer rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4  text-white bg-pink-600 p-4 hover:bg-white hover:text-pink-600 duration-300 rounded-full font-semibold"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Listing;
