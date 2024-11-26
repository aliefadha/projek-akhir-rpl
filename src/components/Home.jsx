import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-dvh flex justify-center items-center bg-hero-pattern bg-cover bg-center">
        <div className="min-h-screen w-full bg-black/50 flex justify-between items-center px-16">
          {/* <iframe
            width="480"
            height="270"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe> */}
          <iframe
            width="480"
            height="270"
            src="https://www.youtube.com/embed/6BD7tM8WeNQ?si=wZ03i9hUGajQ1mCI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-xl"
          ></iframe>
          <div>
            <h1 className=""></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
