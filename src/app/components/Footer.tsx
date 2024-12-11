export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="/logo.png"
              alt="Restaurant Logo"
              width={150}
              height={40}
              className="mb-4"
            />
            <p className="text-gray-600">
              Your favorite restaurant, now online.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-600">
              <li>123 Restaurant Street</li>
              <li>City, State 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@restaurant.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#004D40]">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-[#004D40]">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-[#004D40]">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© 2024 Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
