const AvailabilityDropDownMenu = ({ dropdownRef }) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="absolute top-full right-0 mt-2 w-48 bg-black/50 rounded-lg shadow-lg">
      <div
        className="px-4 py-3 text-sm text-gray-300 hover:bg-white/10 cursor-pointer rounded-lg"
        onClick={() => {
          setAvailability((prev) => {
            return !prev;
          });
          setShowDropdown(false);
        }}
      >
        Change availability
      </div>
    </div>
  );
};

export default AvailabilityDropDownMenu;
