
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
// import img1 from "https://i.ibb.co/yWzVkLm/person1.jpg"

const Testimonials = () => {
  

  return (
    <div className="my-52 flex flex-col md:flex-row items-center">
      <h2 className="text-heading w-[400px] md:w-[500px]">Testimonials <br /> & <br /> Reviews</h2>
      <div className="shadow-2xl shadow-pink-200 px-2 md:px-10 py-16 rounded-xl max-w-[400px] md:max-w-3xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center gap-4">
              <div className="border-4 rounded-full border-pink-500">
                <img
                  className="rounded-full w-32 h-32 object-cover"
                  src="https://i.ibb.co/yWzVkLm/person1.jpg"
                  alt=""
                />
              </div>
              <h4 className="text-3xl font-bold">John Doe</h4>
              <p className="text-base font-thin leading-loose text-center">
                <span className="bg-pink-50 p-1">
                  The educational toys I purchased from this website have been a
                  game changer for my children. They have not only provided
                  hours of entertainment but have also helped improve their
                  cognitive skills and creativity. Highly recommended!
                </span>
              </p>
              <p>4.5</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-4">
              <div className="border-4 rounded-full border-pink-500">
                <img
                  className="rounded-full w-32 h-32 object-cover"
                  src="https://i.ibb.co/KXQT4BN/person3.jpg"
                  alt=""
                />
              </div>
              <h4 className="text-3xl font-bold">Jane Smith</h4>
              <p className="text-base font-thin leading-loose text-center">
                <span className="bg-pink-50 p-1">
                I'm impressed with the quality and variety of educational toys available on this platform. My kids are constantly engaged and learning while having fun. This website has become my go-to destination for educational toys!
                </span>
              </p>
              <p>4.8</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-4">
              <div className="border-4 rounded-full border-pink-500">
                <img
                  className="rounded-full w-32 h-32 object-cover"
                  src="https://i.ibb.co/Xx8W0Sm/person2.jpg"
                  alt=""
                />
              </div>
              <h4 className="text-3xl font-bold">Robert Johnson</h4>
              <p className="text-base font-thin leading-loose text-center">
                <span className="bg-pink-50 p-1">
                I can't express how much I love the educational toys from this ecommerce website. They have exceeded my expectations in terms of both quality and educational value. My kids are always excited to play and learn with these toys.
                </span>
              </p>
              <p>5</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-4">
              <div className="border-4 rounded-full border-pink-500">
                <img
                  className="rounded-full w-32 h-32 object-cover"
                  src="https://i.ibb.co/HCGVLjd/person4.jpg"
                  alt=""
                />
              </div>
              <h4 className="text-3xl font-bold">Michael Anderson</h4>
              <p className="text-base font-thin leading-loose text-center">
                <span className="bg-pink-50 p-1">
                The educational toys I bought from this platform have truly sparked my children's curiosity and imagination. The toys are thoughtfully designed and encourage critical thinking. I'm grateful to have found such a fantastic resource!
                </span>
              </p>
              <p>4.7</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-4">
              <div className="border-4 rounded-full border-pink-500">
                <img
                  className="rounded-full w-32 h-32 object-cover"
                  src="https://i.ibb.co/822MTFV/person5.jpg"
                  alt=""
                />
              </div>
              <h4 className="text-3xl font-bold">Keen Lee</h4>
              <p className="text-base font-thin leading-loose text-center">
                <span className="bg-pink-50 p-1">
                These educational toys have been a wonderful addition to our homeschooling curriculum. They are engaging, educational, and promote hands-on learning. My kids are excited to learn with these toys every day!
                </span>
              </p>
              <p>4.9</p>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
      <div></div>
    </div>
  );
};

export default Testimonials;
