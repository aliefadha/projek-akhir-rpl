import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  const { nama, deskripsi, gambar, src } = budaya;

  return (
    <div className="grid grid-cols-12 gap-4 overflow-hidden px-8 py-4">
      <div className="col-span-4">
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
      <div className="col-span-8">
        <h1>{nama}</h1>
        <p>{deskripsi}</p>
      </div>
    </div>
  );
};

export default DetailBudaya;
