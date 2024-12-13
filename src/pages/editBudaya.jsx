import { useState, useEffect } from "react";
import { getDetailBudaya, updateBudaya } from "../service/budayas.service";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditBudaya = () => {
  const { id } = useParams(); // Mendapatkan id dari parameter URL
  const navigate = useNavigate();

  const [budaya, setBudaya] = useState({
    nama_budaya: "",
    deskripsi_budaya: "",
    image_path: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBudaya = async () => {
      try {
        setLoading(true);
        getDetailBudaya(id, (data) => {
          setBudaya(data);
          setLoading(false);
        });
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBudaya();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBudaya((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBudaya(id, budaya);
      alert("Data berhasil diperbarui!");
      navigate("/dashboard"); // Kembali ke dashboard setelah berhasil
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Memuat data...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Data Budaya</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="nama_budaya"
          >
            Nama Budaya
          </label>
          <input
            type="text"
            id="nama_budaya"
            name="nama_budaya"
            value={budaya.nama_budaya}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="deskripsi_budaya"
          >
            Deskripsi
          </label>
          <textarea
            id="deskripsi_budaya"
            name="deskripsi_budaya"
            value={budaya.deskripsi_budaya}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="image_path"
          >
            URL Gambar
          </label>
          <input
            type="text"
            id="image_path"
            name="image_path"
            value={budaya.image_path}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Simpan
          </button>
          <Link
            to="/dashboard"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Batal
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditBudaya;
