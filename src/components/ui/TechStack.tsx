interface TechStackProps {
  children: React.ReactNode;
  color: string;
}

const TechStack = ({ children, color }: TechStackProps) => {
  const isCustomColor = color.startsWith("text-[");
  return (
    <span
      className={`${color} px-3 py-1 text-sm font-medium rounded-full bg-gray-800 transition-transform hover:-translate-y-1 hover:shadow-lg duration-200`}
      style={isCustomColor ? { color: color.slice(6, -1) } : {}}
    >
      {children}
    </span>
  );
};

export default TechStack;
