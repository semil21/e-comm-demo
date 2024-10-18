import banner from "@/images/banner.jpeg";
import CardComponent from "@/components/card";
import { CardContainer } from "@/components/models";
import TopProfiles from "@/components/topProfiles";
import RateCard, { Pricing } from "@/components/RateCard";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-0 sm:p-0">
        <div
          className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat text-center flex flex-col justify-center items-center "
          style={{
            backgroundImage: `url(https://imgs.search.brave.com/kdoTmXHaysBKs-f-B2QcNpAL56ThJ61umVQcuC9m40c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zdXBlcm1vZGVs/LXdpdGgtZ29yZ2Vv/dXMtZmlndXJlLXBv/c2VzLWJlYWNoLWJl/YXV0aWZ1bC13ZWF0/aGVyXzI1MzM0Mi0z/NjI0LmpwZz9zaXpl/PTYyNiZleHQ9anBn)`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <h1 className="relative text-white text-4xl sm:text-6xl font-bold z-10">
            We Offer Only Verified Escorts
          </h1>
          <p className="relative text-white text-lg sm:text-2xl mt-4 z-10">
            Delhi Girls, Hot Women, Horny Russian, Models Waiting for You!
          </p>

          <a
            href="tel:+917070801847"
            className="relative flex items-center mt-6 text-lg sm:text-xl text-white hover:text-blue-500 z-10"
          >
            Call Now : 24 X 7
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917070801847?text=Hello%21%20I%20want%20to%20enquire%20about%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center mt-4 text-lg sm:text-xl bg-[#25D366] text-white hover:bg-[#1EBE56] py-2 px-4 rounded-full z-10"
          >
            <FaWhatsapp className="mr-2" />
            WhatsApp Us
          </a>
        </div>
      </div>

      <div class="w-screen	 mx-auto lg:p-[10rem] lg:pt-[3rem] md:p-[5rem] p-8  bg-[#D20A2E] text-white min-h-screen">
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-4">
          Delhi Escorts Service Agency – A Complete Introduction
        </h1>

        <h2 class="text-xl md:text-2xl font-semibold text-center mb-6">
          Delightful and Erotic Sex with Sexy Independent Delhi Escorts.
        </h2>

        <div class="space-y-6 text-lg leading-relaxed">
          <p>
            Hey, Handsome Hunks! It is time for you to enjoy our exclusive
            escort service in Delhi. We welcome you to our agency where you will
            find high-class girls. We bring the most popular escorts in the
            city. All the escorts are alluring and high-class, ensuring sensual
            entertainment in your life.
          </p>

          <p>
            However, to have a perfect experience, we need the right girl.
            Finding a Punjabi escort is not easy. Many gentlemen face issues
            while searching. If you are struggling, then hire our service now!
          </p>

          <p>
            At our agency, we provide high-profile escorts. Our escorts will
            fulfill all your needs, leaving no room for disappointment. You can
            rely on us for any occasion.
          </p>

          <p>
            We are excited to introduce you to our agency. Lots of options await
            you, and we guarantee satisfaction.
          </p>
        </div>
      </div>

      <CardComponent />
      <h1 class="text-3xl md:text-4xl font-bold mb-2 text-center mt-5">
        Our Top Escort Profiles
      </h1>
      <CardContainer />
      <TopProfiles />
      {/* <RateCard/> */}
      <Pricing />
      <br />
      <br />
      <br />
    </>
  );
}
