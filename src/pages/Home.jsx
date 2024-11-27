import Navbar from "../components/Navbar";
import { FaArrowDown } from "react-icons/fa6";
import { Link as LinkScroll } from "react-scroll";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        className="min-h-dvh flex justify-center items-center bg-hero-pattern bg-cover bg-center"
        name="Home"
      >
        <div className="h-dvh w-full bg-black/70 flex flex-col relative justify-center items-center px-8 md:px-16">
          <article className="flex flex-col md:flex-row justify-center gap-8 items-center">
            <iframe
              src="https://www.youtube.com/embed/zuw-iD5czG4?si=ToTJcrnnQ7A25Dk7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="rounded-xl flex-1 aspect-video w-80"
            ></iframe>
            <div className="text-slate-200 flex-1">
              <h1 className="font-bold md:text-3xl text-xl mb-4 md:mb-2 md:text-start text-center">
                Kembali ke Masa Jaya dengan{" "}
                <span className="block">Nilai-Nilai Luhur Budaya</span>
              </h1>
              <p className="text-justify md:text-start">
                Lentera Minangkabau hadir untuk melestarikan warisan budaya,
                adat, dan nilai-nilai luhur yang membentuk identitas bangsa
                Minangkabau. Mari bersama menjaga kekayaan ini untuk generasi
                mendatang.
              </p>
            </div>
          </article>
          <LinkScroll
            to="content"
            smooth
            duration={500}
            className="absolute bottom-4 text-slate-200 p-2 aspect-square border-slate-200 border rounded-full cursor-pointer hover:text-slate-950 hover:bg-slate-200 transition-all duration-200"
          >
            <FaArrowDown size={15} />
          </LinkScroll>
        </div>
      </div>
    </div>
  );
};

export default Home;
