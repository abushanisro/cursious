import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Aryan",
    feedback:
      "CuriousAI transformed our workflow. Their custom solution increased our productivity by 40%.",
    role: "Product Manager, ECOVO",
  },
  {
    id: 2,
    name: "Om Nitin",
    feedback:
      "The team at CuriousAI understood our vision and delivered beyond expectations!",
    role: "Partner, Grit",
  },
  {
    id: 3,
    name: "Adnan",
    feedback:
      "Their creative approach and dedication to excellence are unmatched in the industry.",
    role: "CTO, Clipsy",
  },
];

const TestimonialsCarousel = () => {
  return (
    <div className="w-full px-4 py-10 lg:py-20 bg-n-8 rounded-[2rem]">
      <h2 className="text-center text-3xl lg:text-5xl font-semibold text-white mb-10">
        What Our Clients Say
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="w-full max-w-4xl mx-auto"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-n-6 text-white rounded-xl p-8 shadow-xl"
            >
              <p className="text-lg italic mb-6">&ldquo;{testimonial.feedback}&rdquo;</p>
              <div className="font-semibold text-lg">{testimonial.name}</div>
              <div className="text-sm text-n-3">{testimonial.role}</div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsCarousel;
