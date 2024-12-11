const OfferPage = () => {
  const offers = [
    {
      title: 'Mega Sale: 50% Off on All Electronics!',
      description:
        'Upgrade your gadgets with half the price. Offer valid until the end of the month.',
      code: 'ELEC50',
      expiry: 'Expires: Dec 31, 2024',
    },
    {
      title: 'Buy 1 Get 1 Free on Clothing!',
      description:
        'Refresh your wardrobe with our exclusive BOGO offer. Shop now!',
      code: 'BOGOFREE',
      expiry: 'Expires: Jan 15, 2025',
    },
    {
      title: 'Free Shipping on Orders Above $50',
      description:
        'Enjoy hassle-free delivery for orders above $50. No code needed!',
      expiry: 'Expires: Dec 31, 2024',
    },
  ];

  return (
    <div className=" py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Exclusive Offers
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Don’t miss out on these amazing deals. Shop now and save big!
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              {offer.title}
            </h2>
            <p className="text-gray-700 mb-4">{offer.description}</p>
            {offer.code && (
              <div className="bg-indigo-100 text-indigo-600 font-medium py-2 px-4 rounded-lg mb-4">
                Use Code: <span className="font-bold">{offer.code}</span>
              </div>
            )}
            <p className="text-gray-500 text-sm">{offer.expiry}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferPage;
