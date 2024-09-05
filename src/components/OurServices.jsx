import LinkButton from "./LinkButton";
import SectionParagraph from "./SectionHeader/SectionParagraph";
import SectionTitle from "./SectionHeader/SectionTitle";
import ServiceTabs from "./ServiceTabs";

const OurServices = () => {
  const services = [
    { name: "Oracle Development" },
    { name: "VRF Protocol Development" },
    { name: "ZK-Rollup Development" },
    { name: "Optimistic Rollup Development" },
    { name: "Lauchpad Development" },
    { name: "Wallet Development" },
  ];

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        <div>
          <div className="flex flex-col gap-4">
            <SectionTitle
              title="Tailored to Your Needs"
              subtitle="Our Services"
            />
            <SectionParagraph
              paragraph="Empower your business with our cutting-edge blockchain development
            services. Our comprehensive list of offerings is designed to provide
            you with the best solutions for your needs."
            />
          </div>
          <ServiceTabs services={services} />
        </div>
        <LinkButton name="View All" href="/" />
      </div>
    </section>
  );
};

export default OurServices;
