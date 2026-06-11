import { Link } from 'react-router';

export default function NavBar() {
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* NAVBAR */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-black text-xl tracking-wider text-indigo-600">
            React 3
          </div>
          
          {/* LINK NAVIGASI */}
          <div className="flex gap-6 font-semibold text-sm md:text-base">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 transition duration-200">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600 transition duration-200">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600 transition duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}