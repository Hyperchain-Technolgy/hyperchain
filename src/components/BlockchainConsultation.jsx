import consult from "../assets/consult/consult.jpeg";
import { PhoneIcon } from "@heroicons/react/16/solid";

const BlockchainConsultation = () => {
  return (
    <section className="container mx-auto py-20 px-[25rem]">
      <div className="bg-black text-white flex justify-center gap-8 items-center rounded-lg border-2 border-white/30 p-8">
        <div className="w-[300px] h-[300px]">
          <img
            src={consult}
            alt="Blockchain Consultation"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            Schedule Your Blockchain Consultation
          </h2>
          <p className="mb-6">
            Unleash the power of innovation with our Enterprise Blockchain
            Development Services and take the first step towards transforming
            your business today.
          </p>
          <button className="bg-black text-white py-2 px-4 rounded-full flex items-center hover:bg-white hover:text-black border-2 border-white transition-colors duration-300">
            <span className="mr-2">Talk To Blockchain Expert</span>
            <PhoneIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlockchainConsultation;
