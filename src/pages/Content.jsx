import Budaya from "../assets/Budaya.jpeg";
import NilaiLuhur from "../assets/NilaiLuhur.jpeg";
import LinkButton from "../components/LinkButton";

const Content = () => {
  return (
    <div
      className="grid grid-cols-12 min-h-screen pt-16 pb-4 px-4 gap-4"
      name="content"
    >
      <div className="col-span-12 rounded-lg p-4 bg-slate-300 md:col-span-6 md:relative md:h-[550px]">
        <h1 className="text-center font-bold text-2xl">BUDAYA</h1>
        <img
          src={Budaya}
          alt="Tari Piring"
          className="rounded-md my-2 aspect-video"
          loading="lazy"
        />
        <p>
          Kebudayaan merupakan penyelesaian manusia terhadap lingkungan
          hidupnya, serta usaha untuk mempertahankan kelangsungan hidupnya
          sesuai dengan keadaan (tradisi) yang terbaik.
        </p>
        <LinkButton path="/budaya" variant="md:absolute md:bottom-2">
          Pelajari Selengkapnya
        </LinkButton>
      </div>
      <div className="col-span-12 rounded-lg md:relative p-4 bg-slate-300 md:h-[550px] md:col-span-6">
        <h1 className="text-center font-bold text-2xl">NILAI LUHUR</h1>
        <img
          src={NilaiLuhur}
          alt="Nilai Luhur"
          className="rounded-md my-2 aspect-video"
          loading="lazy"
        />
        <p>
          Keyakinan seseorang yang mendorongnya untuk berperilaku dan bersikap
          sesuai dengan standar atau pegangan tertentu.
        </p>
        <LinkButton path="/nilai-luhur" variant="md:absolute md:bottom-2">
          Pelajari Selengkapnya
        </LinkButton>
      </div>
    </div>
  );
};

export default Content;
