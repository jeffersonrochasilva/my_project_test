import { Bell, Search, UserCircle, Sun } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-6  shadow-sm rounded-sm h-[90px]">
      <div className="flex items-center space-x-2 border-r border-gray-100 h-full  w-1/4">
        <div className="h-8 w-8 rounded-lg bg-blue-600"></div>
        <h1 className="text-xl  m-[0] text-[#796BF4]">Shop</h1>
        <h1 className="text-xl  text-gray-800">Sense</h1>
      </div>
      <div className="flex flex-1  mx-6 w-2/4">
        <div className="flex items-start w-3/4 bg-gray-100 rounded-lg px-3 py-2">
          <Search className="text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent ml-2 w-full outline-none text-sm text-gray-700"
          />
        </div>
      </div>
      <div className="flex items-center justify-between w-1/4">
        <button className="relative text-gray-600 hover:text-gray-800 w-">
          <Sun className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="relative text-gray-600 hover:text-gray-800">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex flex-col border-l pl-2 border-gray-100">
          <button className="flex items-center space-x-2">
            <UserCircle className="w-8 h-8 text-gray-600" />
          </button>
        </div>
        <div className="flex flex-col ">
          <span className="text-base  text-gray-800">Migel Santos</span>
          <span className="text-base  text-gray-300">Shop admin</span>
        </div>
        <div className="flex flex-col ">
          <span className="text-lg  text-gray-800">...</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
