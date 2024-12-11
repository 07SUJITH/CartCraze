const AboutUs = () => {
  return (
    <div className=" py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          About Us
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed text-center mb-6">
          Welcome to{' '}
          <span className="text-[#6fc64f] font-semibold">CartCraze</span>, your
          ultimate destination for online shopping! We are dedicated to bringing
          you a seamless and enjoyable shopping experience with an extensive
          selection of products at competitive prices.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At CartCraze, our vision is to create a shopping platform where
              convenience meets quality. We aim to empower customers by
              providing easy access to products that enhance their lifestyles,
              all from the comfort of their homes.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
              <li>Wide range of quality products across various categories.</li>
              <li>Fast and reliable shipping to your doorstep.</li>
              <li>Secure payment options for a worry-free experience.</li>
              <li>24/7 customer support to address your queries.</li>
              <li>
                Regular discounts and exclusive deals for our valued customers.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Join the Craze Today!
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you're looking for the latest trends or everyday essentials,
            CartCraze has something for everyone. We are excited to be a part of
            your shopping journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
