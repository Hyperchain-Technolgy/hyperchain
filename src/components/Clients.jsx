import { useState, useEffect } from "react";
import SectionTitle from "./SectionHeader/SectionTitle";
import SectionParagraph from "./SectionHeader/SectionParagraph";
import PropTypes from "prop-types";
import Indicators from "./Indicators";
import { testimonials } from "../constants";

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-8 flex flex-col h-full shadow-lg transition-all duration-300">
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

const Clients = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="flex flex-col lg:items-center gap-2 lg:gap-4 mb-8">
        <SectionTitle title="Words from Our Clients" subtitle="clients" />
        <SectionParagraph paragraph="Don't just take our word for it. Read what our clients have to say about their experience working with us." />
      </div>

      <div className="lg:mt-20">
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

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
