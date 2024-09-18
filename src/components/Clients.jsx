import { useState, useEffect } from "react";
import SectionTitle from "./SectionHeader/SectionTitle";
import SectionParagraph from "./SectionHeader/SectionParagraph";
import PropTypes from "prop-types";

const testimonials = [
  {
    text: "Hyperchain Technologies delivered an exceptional blockchain solution that transformed our business operations.",
    author: "John Doe",
    position: "CEO, Company A",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    text: "The team's expertise in blockchain development is unparalleled. They exceeded our expectations.",
    author: "Jane Smith",
    position: "CTO, Company B",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    text: "Working with Hyperchain was a game-changer for our project. Their innovative approach set us apart in the market.",
    author: "Mike Johnson",
    position: "Founder, Startup C",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-8 flex flex-col h-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
    <p className="text-white/90 italic mb-6 flex-grow text-lg leading-relaxed">
      {testimonial.text}
    </p>
    <div className="flex items-center">
      <img
        src={testimonial.avatar}
        alt={testimonial.author}
        className="w-16 h-16 rounded-full mr-4 border-4 border-white/20 shadow-md"
      />
      <div>
        <p className="text-white font-semibold text-lg">{testimonial.author}</p>
        <p className="text-white/70 text-sm">{testimonial.position}</p>
      </div>
    </div>
  </div>
);

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

const Indicators = ({ activeIndex, setActiveIndex, totalCount }) => (
  <div className="flex justify-center mt-10 space-x-3">
    {[...Array(totalCount)].map((_, index) => (
      <button
        key={index}
        onClick={() => setActiveIndex(index)}
        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
          index === activeIndex
            ? "bg-white scale-125"
            : "bg-white/30 hover:bg-white/50"
        }`}
        aria-label={`Go to testimonial ${index + 1}`}
      />
    ))}
  </div>
);

Indicators.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
};

const Clients = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="flex flex-col items-center gap-4 mb-8">
        <SectionTitle title="Words from Our Clients" subtitle="clients" />
        <SectionParagraph paragraph="Don't just take our word for it. Read what our clients have to say about their experience working with us." />
      </div>

      <div className="mt-20">
        <div className="relative">
          {/* Large devices: 3 reviews */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {[0, 1, 2].map((offset) => (
              <TestimonialCard
                key={offset}
                testimonial={
                  testimonials[(activeIndex + offset) % testimonials.length]
                }
              />
            ))}
          </div>

          {/* Small devices: 1 review */}
          <div className="lg:hidden">
            <TestimonialCard testimonial={testimonials[activeIndex]} />
          </div>
        </div>

        <Indicators
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          totalCount={testimonials.length}
        />
      </div>
    </section>
  );
};

export default Clients;
