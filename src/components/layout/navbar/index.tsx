import { useState } from "react";
import {
  Mail,
  FileChartColumnIncreasing,
  Users,
  Store,
  Settings,
  FileQuestionMark,
  Box,
  ChartNoAxesCombined,
  Home,
} from "lucide-react";

const Navbar = () => {
  const [selected, setSelected] = useState("Dashboard");

  const itemClass = (name: string) =>
    `rounded-[10px] p-2 m-1 flex items-center space-x-2 cursor-pointer h-10 transition ${
      selected === name ? "bg-[#F8F8F8]" : "hover:bg-gray-50"
    }`;

  const iconColor = (name: string) => (selected === name ? "#8072FB" : "gray");

  return (
    <div className="w-1/4 flex flex-col border-r border-gray-100 space-x-2 ml-[12px] p-2">
      <div>
        <span className="text-xs text-gray-300">GENERAL</span>

        <div
          className={itemClass("Dashboard")}
          onClick={() => setSelected("Dashboard")}
        >
          <Home size={14} color={iconColor("Dashboard")} />
          <span className="text-gray-800 text-xs font-medium">Dashboard</span>
        </div>

        <div
          className={itemClass("Statistics")}
          onClick={() => setSelected("Statistics")}
        >
          <ChartNoAxesCombined size={14} color={iconColor("Statistics")} />
          <span className="text-gray-800 text-xs font-medium">Statistics</span>
        </div>
      </div>

      <div>
        <span className="text-xs text-gray-300">SHOP</span>
        <div>
          <div
            className={itemClass("My Shop")}
            onClick={() => setSelected("My Shop")}
          >
            <Store size={14} color={iconColor("My Shop")} />
            <span className="text-gray-800 text-xs font-medium">My Shop</span>
          </div>

          <div
            className={itemClass("Products")}
            onClick={() => setSelected("Products")}
          >
            <Box size={14} color={iconColor("Products")} />
            <span className="text-gray-800 text-xs font-medium">Products</span>
          </div>

          <div
            className={itemClass("Customers")}
            onClick={() => setSelected("Customers")}
          >
            <Users size={14} color={iconColor("Customers")} />
            <span className="text-gray-800 text-xs font-medium">Customers</span>
          </div>

          <div
            className={itemClass("Invoice")}
            onClick={() => setSelected("Invoice")}
          >
            <FileChartColumnIncreasing size={14} color={iconColor("Invoice")} />
            <span className="text-gray-800 text-xs font-medium">Invoice</span>
          </div>

          <div
            className={itemClass("Message")}
            onClick={() => setSelected("Message")}
          >
            <Mail size={14} color={iconColor("Message")} />
            <span className="text-gray-800 text-xs font-medium">Message</span>
          </div>
        </div>
      </div>

      <div>
        <span className="text-xs text-gray-300">SUPPORT</span>
        <div>
          <div
            className={itemClass("Settings")}
            onClick={() => setSelected("Settings")}
          >
            <Settings size={14} color={iconColor("Settings")} />
            <span className="text-gray-800 text-xs font-medium">Settings</span>
          </div>

          <div
            className={itemClass("Help")}
            onClick={() => setSelected("Help")}
          >
            <FileQuestionMark size={14} color={iconColor("Help")} />
            <span className="text-gray-800 text-xs font-medium">Help</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
