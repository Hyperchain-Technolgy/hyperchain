import StatsCard from "./StatsCard";
import hyperchain_logo from "/hyperchain_logo.svg";

const KnowUs = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col-reverse items-start md:justify-between md:flex-row">
        <div className="flex flex-col gap-4 md:w-2/3">
          <p className="tracking-[.25em] uppercase text-sm">Know Us</p>
          <h2 className="text-4xl font-bold">
            Reliable Blockchain Development Company
          </h2>
          <p className="font-['Inter'] font-bold text-xl">
            “Building Tomorrow&apos;s World with Blockchain Today”
          </p>
          <p className="leading-6">
            Hyperchain Technologies is a pioneering Blockchain App Development
            Company that takes great pride in offering top-of-the-line
            blockchain app development services.
          </p>
          <p className="leading-6">
            Our team of experienced professionals is adept at delivering
            comprehensive Enterprise Blockchain Development solutions that cater
            to your specific requirements. With our extensive experience in
            designing utility-driven blockchain systems, we ensure compliance
            with global regulatory requirements. Our services are tailored to
            help streamline operations, cut costs, and stay ahead of the
            competition.
          </p>
        </div>
        <img
          src={hyperchain_logo}
          alt="hyperchain_logo"
          className="h-6 mb-4 md:h-40 md:mt-20"
        />
      </div>
      <StatsCard />
    </section>
  );
};

export default KnowUs;
