import { Bell, Search, UserCircle, Sun } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 shadow-sm">
      {/* Logo */}{" "}
      <div className="flex items-center space-x-2">
        {" "}
        <div className="h-8 w-8 rounded-lg bg-blue-600"></div>{" "}
        <h1 className="text-xl font-bold text-gray-800">ShopSense</h1>{" "}
      </div>
      ```
      {/* Search */}
      <div className="flex flex-1 max-w-md mx-6">
        <div className="flex items-center w-full bg-gray-100 rounded-lg px-3 py-2">
          <Search className="text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent ml-2 w-full outline-none text-sm text-gray-700"
          />
        </div>
      </div>
      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button className="relative text-gray-600 hover:text-gray-800">
          <Sun className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="relative text-gray-600 hover:text-gray-800">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="flex items-center space-x-2">
          <UserCircle className="w-8 h-8 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;
