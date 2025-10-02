import DataImage from "./data";
import { listTools, listProyek, listSertif } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Kode yang indah, lahir dari ketekunan. 👌</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Tanziila Aziizi Gading
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Halo, saya Fresh Graduate Informatika Universitas Islam Indonesia
            yang memiliki ketertarikan pada UI design dan front-end web
            development. Saya senang menciptakan website dengan tampilan
            sederhana namun tetap menarik, serta memberikan pengalaman yang
            nyaman bagi pengguna. Bagi saya, desain yang baik bukan hanya soal
            visual, tapi juga bagaimana membuat interaksi pengguna menjadi lebih
            menyenangkan.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="assets/CV Tanziila (indo).pdf"
              className="bg-blue-800 p-4 px-12 rounded-2xl hover:bg-blue-600"
            >
              Lihat CV <i className="ri-profile-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-slate-600 p-4 px-6 rounded-2xl hover:bg-slate-500"
            >
              Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s"
          loading="lazy"
        />
      </div>

      {/* TENTANG */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="false"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Tanziila, fresh graduate Informatika yang punya
            ketertarikan di bidang UI Design dan Front-end Web Development. Bagi
            saya, desain bukan hanya soal estetika, tapi bagaimana sebuah produk
            digital bisa memberi pengalaman terbaik bagi penggunanya. Saya
            selalu bersemangat untuk belajar hal baru dan mengembangkan
            kemampuan di dunia design serta coding, terutama untuk UI dan
            Front-end. (:
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  100<span className="text-blue-700">%</span>
                </h1>
                <p>Curious Coder</p>
              </div>
              {/* <div>
                <h1 className="text-4xl mb-1">
                  100<span className="text-blue-700">%</span>
                </h1>
                <p>Curious Coder</p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-center text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            Tools yang dipakai
          </h1>
          <p
            className="text-base/loose text-center opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="false"
          >
            Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
            Website ataupun Design
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="false"
                data-aos-delay={tool.dad}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* TENTANG */}

      {/* PROYEK */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="false"
        >
          Proyek
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="false"
        >
          Berikut ini beberapa proyek yang telah saya buat.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="false"
              data-aos-delay={proyek.dad}
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href={proyek.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-800 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* PROYEK */}

      {/* SERTIF */}
      <div className="sertifikat mt-32 py-10" id="sertifikat">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="false"
        >
          Sertifikat
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="false"
        >
          Beberapa sertifikat yang telah saya peroleh.
        </p>
        <div className="sertifikat-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listSertif.map((sertif) => (
            <div
              key={sertif.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-once="false"
              data-aos-delay={sertif.dad}
            >
              <img
                src={sertif.gambar}
                alt={`Sertifikat ${sertif.id}`}
                className="rounded-md"
                loading="lazy"
              />
              <h2 className="text-lg font-semibold text-center mt-4">
                {sertif.nama}
              </h2>
            </div>
          ))}
        </div>
      </div>
      {/* SERTIF */}

      {/* KONTAK */}
      <div className="kontak mt-32 sm:p-10 py-10" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="false"
        >
          kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
          data-aos-once="false"
        >
          Mari terhubung dengan saya
        </p>
        <form
          action="https://formsubmit.co/tanziilaag@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
          data-aos-once="false"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Pesan..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-800 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-600"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* KONTAK */}
    </>
  );
}

export default App;
