import Navbar from "../components/Navbar";
import { GoArrowUpRight, GoArrowDownRight, GoArrowRight } from "react-icons/go";
import { PiMountainsBold } from "react-icons/pi";

const NilaiLuhur = () => {
  const nilaiLuhur = [
    {
      id: 1,
      nama: "MANDAKI",
      simbol: <GoArrowUpRight size={50} />,
      deskripsi:
        "Digunakan untuk berbicara dengan orang yang lebih tua atau dihormati, dengan nada sopan dan penuh penghormatan.",
    },
    {
      id: 2,
      nama: "MANURUN",
      simbol: <GoArrowDownRight size={50} />,
      deskripsi:
        "Digunakan untuk berbicara kepada yang lebih muda, dengan nada mendidik dan penuh kasih.",
    },
    {
      id: 3,
      nama: "MANDATA",
      simbol: <GoArrowRight size={50} />,
      deskripsi:
        "Digunakan untuk berbicara dengan orang sebaya, dengan nada ramah dan santun.",
    },
    {
      id: 4,
      nama: "MALEREANG",
      simbol: <PiMountainsBold size={50} />,
      deskripsi:
        "Digunakan dalam acara adat atau musyawarah, dengan aturan yang formal dan penuh kehati-hatian",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-16 flex flex-col pb-4 px-4 text-center items-center">
        <h1 className="font-bold text-xl  mb-4">NILAI LUHUR</h1>
        <div className="max-w-4xl">
          <h1 className=" font-bold text-3xl">KATO NAN AMPEK</h1>
          <p className="my-4">
            Kato Nan Ampek adalah konsep komunikasi tradisional Minangkabau yang
            mencerminkan tata krama dan adat istiadat dalam berbicara. Konsep
            ini terdiri dari empat cara berbicara yang disesuaikan dengan siapa
            lawan bicara dan konteksnya.
          </p>
          <div className="grid grid-cols-12 gap-4 text-center">
            {nilaiLuhur.map(({ id, nama, simbol, deskripsi }) => (
              <div
                key={id}
                className="col-span-12 md:col-span-6 flex flex-col items-center bg-slate-200 p-2 rounded-md"
              >
                <h1 className="font-semibold">{nama}</h1>
                <div className="h-24 rounded-full aspect-square flex justify-center items-center bg-orange-400 my-4">
                  {simbol}
                </div>
                <p>{deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NilaiLuhur;
