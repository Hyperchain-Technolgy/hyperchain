const footerItems = [
  "ASIC - Application-Specific Integrated Circuit",
  "Cold Wallet - A wallet for cryptocurrency that is not connected to the internet",
  "Hashrate - A measure of a miner's performance",
];

const ScrollingFooter = () => {
  return (
    <div className="w-full bg-black overflow-hidden border-t border-b border-white/30  cursor-pointer my-6">
      <ul className="flex animate-[infinite-scroll_10s_linear_infinite] bg-black  text-[#0f0]/80 font-vt323 text-3xl uppercase gap-10">
        {footerItems.concat(footerItems).map((item, index) => (
          <li key={index} className="flex items-center text-nowrap">
            <span className="text-red-700 mr-4 font-vt323">&#x25BC;</span>
            {item
              .toUpperCase()
              .replace("HASHRATE", "HASH RATE")
              .replace("A MEASURE OF", "A NUMERIC FOR MEASURING")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollingFooter;
