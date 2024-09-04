import metalicPurple from "../assets/metalic_purple.png";
import ScrollingSection from "./ScrollingSection";

const Hero = () => {
  return (
    <main className="container mx-auto">
      <section className="mt-5 mb:mt-10 flex flex-col items-center justify-around lg:flex-row">
        <div className="text-center flex flex-col justify-center lg:text-left">
          <h1 className="text-2xl leading-8 lg:leading-10 md:text-4xl font-bold text-nowrap mb-3">
            <div>Everywhere, Everytime.</div>
            <div>Blockchain Beyond Limits.</div>
          </h1>
          <p className="opacity-80 max-w-[30rem] px-4 md:px-0">
            Hyperchain Technologies - The only emerging tech company that
            pioneers complete blockchain & web based solutions.
          </p>
        </div>
        <img
          src={metalicPurple}
          alt="Object"
          className="mt-10 w-[80%] max-w-80"
        />
      </section>
      <ScrollingSection />
    </main>
  );
};

export default Hero;
