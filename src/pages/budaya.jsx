import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import LinkButton from "../components/LinkButton";

const Budaya = () => {
  const [budaya, setBudaya] = useState([]);

  useEffect(() => {
    fetch("/budaya.json")
      .then((response) => response.json())
      .then((data) => setBudaya(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-16 pb-4 px-4">
        <h1 className="font-bold text-xl mb-3 text-center">BUDAYA</h1>
        <div className="gap-4 grid grid-cols-12">
          {budaya.map(({ id, nama, deskripsi, gambar }) => (
            <article
              key={id}
              className="col-span-12 md:col-span-4 p-6 bg-slate-200 rounded-xl md:relative md:h-[468px]"
            >
              <div className="flex items-center flex-col gap-4 mb-4">
                <div className="aspect-video h-38 mb-2">
                  <img
                    src={gambar}
                    alt={nama}
                    className="w-full aspect-video object-center object-cover rounded-md"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-2xl">{nama}</h2>
                  <p>{deskripsi.substring(0, 125)}...</p>
                </div>
              </div>
              <LinkButton
                path={`/budaya/${id}`}
                variant="md:absolute md:bottom-2"
              >
                Pelajari Selengkapnya
              </LinkButton>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budaya;
