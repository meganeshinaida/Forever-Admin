import { NavLink } from "react-router-dom";
import { FiHome, FiUsers, FiSettings, FiMenu, FiX, FiBarChart2, FiFileText, FiBell, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import logo from '../assets/logo.png'
import image from '../assets/image.png'
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const links = [
    { name: "Dashboard", icon: <FiHome />, path: "/dashboard" },
    { name: "Site Builder", icon: <FiUsers />, path: "/site_builder" },
    { name: "Ticketing", icon: <FiBarChart2 />, path: "/analytics" },
    { name: "Reports", icon: <FiFileText />, path: "/reports" },
    { name: "Notifications", icon: <FiBell />, path: "/notifications" },
    { name: "Settings", icon: <FiSettings />, path: "/settings" },
  ];

  return (
    <>
      <aside
        className={` absolute fixed left-0 top-0 h-screen bg-gradient-to-b from-gray-900 to-black  text-white bg-cover bg-center z-40
          transition-all duration-300 md:static overflow-y-auto shadow-lg
          ${sidebarOpen ? "w-64" : "w-20"}`}
      
      >
  
      
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className={`flex items-center gap-3 ${sidebarOpen ? "" : "justify-center w-full"}`}>
            <div className={`flex items-center justify-center transition-all duration-300
             ${sidebarOpen ? "w-1/2 h-1/2" : "w-10 h-10"}`}>
             <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            {sidebarOpen && <span className="text-2xl font-bold">Admin</span>}
            
          </div>
          <button
            className="p-1 text-white hover:bg-gray-800 rounded md:block hidden relative "
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title={sidebarOpen ? "Collapse" : "Expand"}
          >
            {sidebarOpen ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                  sidebarOpen ? "" : "justify-center"
                } ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
              title={link.name}
            >
              <div className="text-xl flex-shrink-0">{link.icon}</div>
              {sidebarOpen && <span className="font-medium">{link.name}</span>}
            </NavLink>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="absolute bottom-0 left-0 right-0 border-t border-gray-700 p-4 text-center text-xs text-gray-400">
            <p>© 2024 Admin Panel</p>
            <p>v1.0.0</p>
          </div>
        )}
     
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Mobile toggle button (fixed top-left) */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </>
  );
};

export default Sidebar;
