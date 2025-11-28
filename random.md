footer {
  background-color: #07142a;
  color: white;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-top: 1px solid #8928a6;
}

footer h2 {
  text-align: center;
  font-size: 35px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 30px;
}
footer a{
    text-decoration: none;
}
footer ul{
    list-style: none;
}
.btn{
    color: white;
}
.copy{
    text-align: center;
}


# project

const projects2 = [
    {
    tema: "Bahasa Inggris",
    komen: 
    "Saya mempelajari dasar struktur web seperti membuat teks, gambar, link, dan elemen halaman menggunakan HTML.",
    gambar: "inggris.png",
},
{
    tema: "Nahwu",
    komen: 
    "Membuat poster i'rab dari surat AL-Ikhlas ayat ke 2 menggunakan aplikasi figma sebagai tugas praktek nahwu.",
    gambar: "Poster I'rab.png",
},
{
    tema: "Other Project",
    komen: 
    "Saya mempelajari logika dasar untuk membuat web lebih interaktif, seperti penggunaan variabel, fungsi, event, dan manipulasi DOM.",
    gambar: "",
},
]
const projectUmum = document.getElementById("proyek");
for(let i=0; i<projects2.length; i++){
    let projekUmum = projects2[i]

    let poker = document.createElement("div");
    poker.className = "kartu";

    let moreBungkus = document.createElement("div");
    moreBungkus.className = "pusing";

    let judul = document.createElement("h2");
    judul.textContent = projekUmum.tema;

    let komen = document.createElement("P");
    komen.textContent = projekUmum.komen

    let foto = document.createElement("img");
    foto.src = projekUmum.gambar;
    foto.className = "project3-img";
    
    poker.appendChild(foto);
    poker.appendChild(moreBungkus);
    moreBungkus.appendChild(judul);
    moreBungkus.appendChild(komen);
    projectUmum.appendChild(poker);
}

# CSS

.project3-img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-start-end-radius: 8px;
    border-start-start-radius: 8px;
}
.pusing{
    padding: 15px;
}