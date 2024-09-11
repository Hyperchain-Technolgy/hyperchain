import consult from "../assets/consult/consult.jpeg";
import { PhoneIcon } from "@heroicons/react/16/solid";

const BlockchainConsultation = () => {
  return (
    <section className="container mx-auto py-20">
      <div className="border-2 border-white/30 mx-auto w-4/6 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="bg-black text-white flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="w-full h-auto max-w-[300px] max-h-[300px] aspect-square">
            <img
              src={consult}
              alt="Blockchain Consultation"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
              Schedule Your Blockchain Consultation
            </h2>
            <p className="mb-4 sm:mb-5 md:mb-6">
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
      </div>
    </section>
  );
};

export default BlockchainConsultation;
