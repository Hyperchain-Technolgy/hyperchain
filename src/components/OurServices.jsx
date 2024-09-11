import LinkButton from "./LinkButton";
import SectionParagraph from "./SectionHeader/SectionParagraph";
import SectionTitle from "./SectionHeader/SectionTitle";
import ServiceTabs from "./ServiceTabs";
import oracleDevelopment from "../assets/service/oracledevelopment.webp";
import vrfProtocol from "../assets/service/vrf-protocol.png";
import zkRollup from "../assets/service/zk-rollups.png";
import optimisticRollup from "../assets/service/optimistic-rollups.png";
import launchpadDevelopment from "../assets/service/lunchapad-development.png";
import walletDevelopment from "../assets/service/wallet-development.png";

const OurServices = () => {
  const services = [
    {
      name: "Oracle Development",
      description:
        "We specialize in developing dApps and smart contracts on Oracle blockchain, streamlining operations and reducing costs. Our solutions connect blockchain networks with external data sources, creating a seamless bridge between systems.",
      image: oracleDevelopment,
    },
    {
      name: "VRF Protocol Development",
      description:
        "We possess in-depth knowledge and technical expertise in VRF (Verifiable Random Function) protocol development. We leverage the power of VRFs to deliver cutting-edge solutions that require a high degree of randomness, such as gaming applications, lotteries, and DeFi protocols.",
      image: vrfProtocol,
    },
    {
      name: "ZK-Rollup Development",
      description:
        "We specialize in Zero-knowledge-Rollups development, providing custom solutions for various blockchain platforms. We integrate ZK-Rollups with smart contracts and oracle systems to improve scalability and efficiency while ensuring security and trustlessness.",
      image: zkRollup,
    },
    {
      name: "Optimistic Rollup Development",
      description:
        "We have experience in developing Layer 2 solutions that utilize OR as a scaling solution. We leverage our expertise in OR development to provide our clients with cutting-edge solutions that enhance the performance of their blockchain-based applications, improve user experience, and increase throughput.",
      image: optimisticRollup,
    },
    {
      name: "Lauchpad Development",
      description:
        "To build the crypto and NFT launchpads, we leverage pertinent technologies like Solana, Stellar, Open Chain, etc. We build launchpads that will propel your project’s visibility to the highest levels in the market and attract investors, new customers, and leads like a magnet.",
      image: launchpadDevelopment,
    },
    {
      name: "Wallet Development",
      description:
        "We provide custom cryptocurrency wallet development services to secure your digital assets. Our services cater to individuals, businesses, and enterprises, and include advanced security features, user-friendly interfaces, and cross-platform compatibility.",
      image: walletDevelopment,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        <div>
          <div className="flex flex-col gap-4">
            <SectionTitle
              title="Tailored to Your Needs"
              subtitle="Our Services" 
              link="/services"
            />
            <SectionParagraph
              paragraph="Empower your business with our cutting-edge blockchain development
            services. Our comprehensive list of offerings is designed to provide
            you with the best solutions for your needs."
            />
          </div>
          <ServiceTabs services={services} />
        </div>
        <div className="lg:hidden mt-8">
          <LinkButton name="View All" href="/" />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
