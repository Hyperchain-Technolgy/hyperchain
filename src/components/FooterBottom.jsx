const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto mt-8 border-t border-gray-800 pt-8">
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <p className="mb-4 sm:mb-0 text-center sm:text-left">
          Hyperchain Technology Company
        </p>
        <p className="flex flex-col sm:flex-row items-center">
          <span className="mb-2 sm:mb-0 sm:mr-2">
            © {currentYear} Hyperchain.
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="mt-2 sm:mt-0 sm:ml-2">All rights reserved.</span>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
