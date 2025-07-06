const Slider = () => {
  return (
    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full my-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/30 slide-loading"></div>
    </div>
  );
};

export default Slider;
