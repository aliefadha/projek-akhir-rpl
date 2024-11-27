import { Link as LinkRoute } from "react-router-dom";
import Budaya from "../assets/Budaya.jpeg";
import NilaiLuhur from "../assets/NilaiLuhur.jpeg";
import LinkButton from "../components/LinkButton";

const Content = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen py-12" name="content">
      <div className="col-span-12 px-2 py-4 md:col-span-6">
        <div className="bg-slate-300 p-4 rounded-lg">
          <h1 className="text-center font-bold text-2xl">BUDAYA</h1>
          <img
            src={Budaya}
            alt="Tari Piring"
            className="rounded-md my-2 aspect-video"
          />
          <p>
            Kebudayaan merupakan penyelesaian manusia terhadap lingkungan
            hidupnya, serta usaha untuk mempertahankan kelangsungan hidupnya
            sesuai dengan keadaan (tradisi) yang terbaik.
          </p>
          <LinkButton path="/budaya">Pelajari Selengkapnya</LinkButton>
        </div>
      </div>
      <div className="col-span-12 px-2 py-4 md:col-span-6">
        <div className="bg-slate-300 p-4 rounded-lg">
          <h1 className="text-center font-bold text-2xl">NILAI LUHUR</h1>
          <img
            src={NilaiLuhur}
            alt="Tari Piring"
            className="rounded-md my-2 aspect-video"
          />
          <p>
            Keyakinan seseorang yang mendorongnya untuk berperilaku dan bersikap
            sesuai dengan standar atau pegangan tertentu.
          </p>
          <LinkButton path="/nilai-luhur">Pelajari Selengkapnya</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Content;
