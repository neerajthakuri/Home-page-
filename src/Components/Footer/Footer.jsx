function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12 mt-20">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-bold mb-3">
            Gr<span className="text-orange-500">o</span>cify
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Your trusted source for fresh, organic groceries delivered right to
            your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-orange-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-zinc-300">
            <li>
              <a href="#" className="hover:text-orange-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Process
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-orange-400">
            Categories
          </h3>
          <ul className="space-y-2 text-zinc-300">
            <li>
              <a href="#" className="hover:text-orange-400">
                Fruits & Veggies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Dairy & Eggs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Meat & Seafood
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Organic Items
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-orange-400">
            Stay Updated
          </h3>
          <p className="text-zinc-400 text-sm mb-3">
            Subscribe to get updates on new products and special offers.
          </p>
          <div className="flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-black outline-none"
            />
            <button className="bg-orange-500 px-5 py-2 text-white font-semibold hover:bg-orange-600">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-zinc-700 mt-10 pt-4 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} Grocify. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
