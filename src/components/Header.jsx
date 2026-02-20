const Header = () => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 w-screen">
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search..."
        className="w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring"
      />

      {/* Right side */}
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Admin</span>
        <button className="px-3 py-1 bg-black text-white rounded-md">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
