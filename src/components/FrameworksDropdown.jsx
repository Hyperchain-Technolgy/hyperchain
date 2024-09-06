const frameworks = [
  { name: "Solana", icon: "☀️" },
  { name: "Ethereum", icon: "💎" },
  { name: "Polkadot", icon: "🔴" },
  { name: "Near Protocol", icon: "🌙" },
  { name: "Aptos", icon: "🔵" },
  { name: "SUI", icon: "🔷" },
  { name: "Binance Smart Chain", icon: "🟨" },
  { name: "Polygon", icon: "🟣" },
  { name: "Avalanche", icon: "🔺" },
  { name: "Arbitrum", icon: "🔷" },
  { name: "Cardano", icon: "🔵" },
  { name: "Hyperledger", icon: "🔗" },
  { name: "R3 Corda", icon: "🔷" },
  { name: "Hedera Hashgraph", icon: "♦️" },
  { name: "Stellar", icon: "🌟" },
];

const FrameworksDropdown = () => {
  return (
    <div className="absolute border border-gray-700 rounded-md shadow-lg z-10 w-[35rem] bg-black bg-opacity-50 backdrop-filter backdrop-blur-md mt-1">
      <div className="grid grid-cols-2 gap-6 mx-8 my-6">
        {frameworks.map((framework, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 text-white hover:text-gray-300 cursor-pointer"
          >
            <span>{framework.icon}</span>
            <span>{framework.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrameworksDropdown;
