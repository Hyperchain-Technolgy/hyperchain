import metalicPurple from "../assets/metalic_purple.png";
import ScrollingSection from "./ScrollingSection";

const Hero = () => {
  return (
    <main className="container mx-auto">
      <section className="mt-5 mb:mt-10 pb-20 lg:pb-0 flex flex-col items-center justify-between lg:flex-row">
        <div className="text-center flex flex-col justify-center lg:text-left">
          <h1 className="text-xl leading-6 md:leading-[3.5rem] md:text-5xl font-bold text-nowrap mb-3">
            <div>Everywhere, Everytime.</div>
            <div>Blockchain Beyond Limits.</div>
          </h1>
          <p className="text-[0.65rem] leading-4 opacity-80 max-w-[30rem]">
            Hyperchain Technologies - The only emerging tech company that
            pioneers complete blockchain & web based solutions.
          </p>
        </div>
        <img
          src={metalicPurple}
          alt="Object"
          className="my-8 w-[80%] max-w-80"
        />
      </section>
      <ScrollingSection />
    </main>
  );
};

export default Hero;
