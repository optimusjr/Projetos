import { GlobeAmericasIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <GlobeAmericasIcon className="h-8 w-8 text-white" />
          <div className="ml-10 flex items-baseline space-x-4 ">
            <h1 className="text-xl font-bold text-white ">GeoQuiz</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
