import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full border-t-2 py-8 px-4">
      <div class=" px-11 mx-auto text-left grid max-w-6xl grid-cols-12 gap-4 p-1">
        <div class=" col-span-12 rounded-lg py-8">
          <h2 className="text-4xl font-bold text-center mb-4">About Us</h2>
        </div>
        <div class="ml-auto col-span-12 rounded-lg sm:col-span-8">
          
          <p className="mt-10 text-lg text-gray-500">
          Welcome to our appointment booking platform for hairdressing! We specialize in the art of hairstyling for everyone, whether it's for men, women, or children. Our mission is to make your beauty experience simple, enjoyable, and accessible.
          <br />
          Ms. Irène, passionate and experienced, is at your service to provide modern cuts, stylish hairstyles, and treatments tailored to your needs. Whether you're looking for a new haircut, a style change, or simply maintenance, she has the skills to satisfy you.
          With our online booking service, you can easily schedule an appointment with Ms. Irène, according to your availability. No more stress or waiting! We believe everyone deserves to feel good and look great, which is why we are committed to offering personalized service to each client.
          <br />
          Discover today how easy it is to book a moment of relaxation and beauty on our platform. Your style, our passion!
          </p>
        </div>
        <div class="col-span-12 rounded-xl pb-1 p-1 sm:col-span-4">
          <img src="../../public/ddc.png" className='h-auto w-96' alt="" />
        </div>

      </div>
    </section>
  );
};

export default About;
