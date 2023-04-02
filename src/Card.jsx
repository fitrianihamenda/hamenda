function Card() {
    return (
      <>
        <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-blue-500 to-blue-600">
         <div class="w-1/2 bg-white rounded-lg shadow-2x1 p-8 m-4">
           <h1 class="block w-full text-center text-gray-800 text-2x1 font-bpld mb-6">
               Kartu  Tanda Penduduk
               <img src={process.env.PUBLIC_URL + 'fitri.webp'} class="flex-=col mb-1 w-40 h-600" />
               
            </h1>
            <form action="/" method="post">
              <div class="flex flex-col mb-4">
                <label
                  class="mb-2 font-bold text-lg text-gray-900"
                  for="nama" 
                >
                    Nama
                </label>
                <input
                    class="border py-2 px-3 text-grey-800"
                    type="text"
                    name="nama"
                    id="nama"
                />
                <label
                    class="mb-2 font-bold text-lg text-gray-900"
                    for="Nama"
                >
                    Tempat/Tgl Lahir
                </label>
                <input
                    class="border py-2 px-3 text-grey-800"
                    type="text"
                    name="Tempat/Tgl lahir"
                    id="nama"
                />
                <label
                    class="mb-2 font-bold text-lg text-gray-900"
                    for="Tempat/Tgl lahir"
                >
                    Jenis Kelamin
                </label>
                <input
                    class="border py-2 px-3 text-grey-800"
                    type="text"
                    name="Jenis Kelamin"
                    id="nama"
                />
                <label
                    class="mb-2 font-bold text-lg text-gray-900"
                    for="Jenis Kelamin"
                >
                    Alamat
                </label>
                <input
                    class="border py-2 px-3 text-grey-800"
                    type="text"
                    name="Alamat"
                    id="nama"
                />
                <label
                    class="mb-2 font-bold text-lg text-gray-900"
                    for="Alamat"
                >
                    Status Perkawinaan
                </label>
                <input
                    class="border py-2 px-3 text-grey-800"
                    type="text"
                    name="Status Perkawinaan"
                    id="nama"
                />
                <label
                    class="mb-2 font-bold text-lg text-gray-900"
                    for="Status Perkawinaan"   
                >
                    Perkerjaan
                </label>
                <input
                    class="border py-2 px-3 text-grey-800"
                    type="text"
                    name="Perkerjaan"
                    id="nama"
                />
                <label
                    class="mb-2 font-bold text-lg text-gray-900"
                    for="nama"
                >
                    Kewargaregaraan
                </label>
                <input
                    class="border py-2 px-3 text-lg text-gray-900"
                    type="text"
                    name="Kewarganegaraan"
                    id="nama"
                />
                <label
                    class="mb-2 font-bold text-lg text-gray-900"
                    for="nama"
                >
                    Berlaku Hingga
                </label>
                <input
                    class="border py-2 px-3 text-lg text-gray-900"
                    type="text"
                    name="Berlaku Hingga"
                    id="nama"
                />









              </div>
              <button
                class="block bg-orange-400 hover:bg-orange-600 text-white uppercase text-lg mx-auto p-4 rounded"
                type="submit"
             >   
                Buat Akun 
              </button>
            </form>
            <a
              class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900"
              href="/"
             >
              Telah memiliki Akun?
             </a>
           </div>
         </div>
       </>
    );
}
  
export default Card;