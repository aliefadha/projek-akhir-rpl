import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LinkButton from "../components/LinkButton";
import { FaArrowLeft } from "react-icons/fa6";

const DetailBudaya = () => {
  const { id } = useParams();
  const [budaya, setBudaya] = useState(null);

  useEffect(() => {
    fetch("/budaya.json")
      .then((response) => response.json())
      .then((data) => {
        const item = data.find((item) => item.id === parseInt(id));
        setBudaya(item);
      });
  }, [id]);

  if (!budaya) {
    return <p>Data tidak ditemukan!</p>;
  }

  const { nama, deskripsi, sejarah, gambar, src } = budaya;

  return (
    <div className="p-4">
      <LinkButton path="/budayas" variant="mb-4">
        <FaArrowLeft className="inline-block mr-2" />
        Kembali
      </LinkButton>
      <div className="grid grid-cols-12 gap-4">
        <div className="md:col-span-4 col-span-12">
          <img src={gambar} alt={nama} className="mb-4" />
          <iframe
            src={src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full aspect-video"
          ></iframe>
        </div>
        <div className="md:col-span-8 col-span-12">
          <h1 className="font-bold text-2xl">{nama}</h1>
          <p className="whitespace-pre-line text-justify mb-4">{deskripsi}</p>
          <h1 className="font-bold text-2xl mb-4">Sejarah {nama}</h1>
          <p className="whitespace-pre-line text-justify mb-4">{sejarah}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailBudaya;
