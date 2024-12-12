import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getTeam } from "../service/team.service";

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true); // Set loading ke true sebelum memulai fetching
        const data = await getTeam();
        setTeam(data); // Simpan data ke state
      } catch (err) {
        setError(err.message); // Tangani error jika terjadi
      } finally {
        setLoading(false); // Set loading ke false setelah selesai fetching
      }
    };

    fetchTeam();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-16 pb-4 px-4">
        <h1 className="font-bold text-xl mb-3 text-center">MEET OUR TEAM</h1>
        {loading ? (
          <div className="h-screen w-full flex justify-center items-center">
            <div className="loader"></div>
          </div>
        ) : error ? (
          <p className="text-center text-red-500">Terjadi kesalahan: {error}</p> // Pesan error
        ) : (
          <div className="gap-4 grid grid-cols-12">
            {team.map(
              ({
                id,
                nama_anggota: nama,
                deskripsi_anggota: background,
                image_path: src,
              }) => (
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
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
