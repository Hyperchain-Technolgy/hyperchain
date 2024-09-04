const StatsCard = () => {
  const stats = [
    { value: "08", description: "Years of Experience" },
    { value: "120", description: "Members in the Team" },
    { value: "94", description: "Successful Projects" },
    { value: "98%", description: "Client Retention" },
  ];

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 my-6 rounded-lg md:my-10 lg:my-16">
      {stats.map((stat, index) => (
        <>
          <div
            key={index}
            className="flex flex-col justify-center items-center lg:after:hidden after:absolute after:w-[1px] after:h-[65%] after:left-[calc(100%_+_15px)] after:even:hidden after:top-1/2 after:-translate-y-1/2 after:bg-[#282828] relative lg:border-r-[1px] border-solid border-[#282828] last-of-type:border-0 lg:gap-2"
          >
            <h2 className="text-3xl lg:text-5xl">{stat.value}</h2>
            <p className="text-gray-400 text-sm">{stat.description}</p>
          </div>
        </>
      ))}
    </section>
  );
};

export default StatsCard;
