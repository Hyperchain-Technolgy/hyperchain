import consult from "../assets/consult/consult.jpeg";
import { PhoneIcon } from "@heroicons/react/24/solid";

const BlockchainConsultation = () => {
  return (
    <section className="container mx-auto py-20 px-4">
      <div className="border border-white/30 rounded-2xl p-0 md:p-6 overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 h-64 lg:h-auto">
            <img
              src={consult}
              alt="Blockchain Consultation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Schedule Your Blockchain Consultation
            </h2>
            <p className="mb-8 text-lg">
              Unleash the power of innovation with our Enterprise Blockchain
              Development Services and take the first step towards transforming
              your business today.
            </p>
            <button className="border-2 border-white hover:bg-white hover:text-black py-3 px-8 rounded-full flex items-center justify-center transition-all duration-300 text-lg shadow-lg hover:shadow-xl sm:w-auto">
              <PhoneIcon className="w-6 h-6 mr-3" />
              <span>Talk To Blockchain Expert</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainConsultation;
