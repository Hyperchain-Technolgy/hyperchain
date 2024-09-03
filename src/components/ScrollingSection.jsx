import ethereum from "../assets/ethereum.svg";
import solana from "../assets/solana.svg";

const technologies = [
  { icon: ethereum, name: "Ethereum" },
  { icon: solana, name: "Solana" },
  { icon: ethereum, name: "Ethereum" },
  { icon: solana, name: "Solana" },
  { icon: ethereum, name: "Ethereum" },
  { icon: solana, name: "Solana" },
];

const ScrollingSection = () => {
  return (
    <div className="mt-10 flex bg-black overflow-hidden">
      <ul className="flex animate-infinite-scroll gap-20 bg-black py-4 text-white">
        {technologies
          .concat(technologies, technologies)
          .map((technology, index) => (
            <li
              key={index}
              className="flex flex-col items-center border border-white px-6 py-3 rounded-lg"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16"
              />
              <p className="text-gray-300">{technology.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ScrollingSection;
