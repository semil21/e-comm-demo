import { FaPhoneAlt } from "react-icons/fa"; // Import the phone icon
import banner from "@/images/banner.jpeg";
import CardComponent from "@/components/card";
import { CardContainer } from "@/components/models";
import TopProfiles from "@/components/topProfiles";
import RateCard, { Pricing } from "@/components/RateCard";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-8 sm:p-20">
        <div
          className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat text-center flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${banner.src})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <h1 className="relative text-white text-4xl sm:text-6xl font-bold z-10">
            Some dummy text
            {/* We Offer Only Verified Escorts */}
          </h1>
          <p className="relative text-white text-lg sm:text-2xl mt-4 z-10">
            Some dummy paragraph
            {/* Delhi Girls, Hot Women, Horny Russian, Models Waiting for You! */}
          </p>

          <a
            href="tel:+911234567890"
            className="relative flex items-center mt-6 text-lg sm:text-xl text-white hover:text-blue-500 z-10"
          >
            <FaPhoneAlt className="mr-2" />
            Call Now : 24 X 7
          </a>
        </div>
      </div>

      <div class="w-screen	 mx-auto lg:p-[10rem] md:p-[5rem] p-8  bg-[#05051f] text-white min-h-screen">
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-4">
          Delhi Escorts Service Agency – A Complete Introduction
        </h1>

        <h2 class="text-xl md:text-2xl font-semibold text-center mb-6">
          Delightful and Erotic Sex with Sexy Independent Delhi Escorts.
        </h2>

        <div class="space-y-6 text-lg leading-relaxed">
          <p>
            Hey, Handsome Hunks! It's time for you to enjoy our exclusive escort
            service in Delhi. We welcome you to our agency where you will find
            high-class girls. We bring the most popular escorts in the city. All
            the escorts are alluring and high-class, ensuring sensual
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

      <CardComponent/>
      <CardContainer />
      <TopProfiles />
      {/* <RateCard/> */}
      <Pricing />
    </>
  );
}
