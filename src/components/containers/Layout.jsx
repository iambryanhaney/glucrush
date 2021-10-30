export const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-gray-600 flex flex-col justify-center items-center">
      {children}
    </div>
  );
};
