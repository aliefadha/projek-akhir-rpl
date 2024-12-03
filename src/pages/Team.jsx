import Navbar from "../components/Navbar";

const Team = () => {
  const team = [
    {
      id: 1,
      nama: "Habib Adli",
      background: "Project Manager",
      src: "./img/Tes.jpg",
    },
    {
      id: 2,
      nama: "Asyifa Putri Romansha",
      background: "Architecture",
      src: "./img/Tes.jpg",
    },
    {
      id: 3,
      nama: "Daud Kurniawan",
      background: "Designer",
      src: "./img/Tes.jpg",
    },
    {
      id: 4,
      nama: "Rayhan Albani",
      background: "Designer",
      src: "./img/Tes.jpg",
    },
    {
      id: 5,
      nama: "Alief Adha",
      background: "Web Developer",
      src: "./img/Tes.jpg",
    },
    {
      id: 6,
      nama: "Fajar Rahyudi Putra",
      background: "Web Developer",
      src: "./img/Tes.jpg",
    },
    {
      id: 7,
      nama: "Muhammad Fajri",
      background: "Web Developer",
      src: "./img/Tes.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-16 pb-4 px-4">
        <h1 className="font-bold text-xl mb-3 text-center">MEET OUR TEAM</h1>
        <div className="gap-4 grid grid-cols-12">
          {team.map(({ id, nama, background, src }) => (
            <article
              key={id}
              className="col-span-12 md:col-span-4 px-6 py-4 bg-slate-200 rounded-xl"
            >
              <div className="flex gap-4 mb-4 items-center">
                <img
                  className="w-28 aspect-square object-center object-cover rounded-full border-[2px] border-slate-50"
                  src={src}
                  alt={nama}
                  loading="lazy"
                />
                <div>
                  <h1 className="font-bold text-2xl">{nama}</h1>
                  <p>{background}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
