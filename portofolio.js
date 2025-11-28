const projects1 = [ 
{
    title: "Kalkulator Zakat Emas",
    description: 
    "Web untuk menghitung zakat emas yang fitur penyimpanannya menggunakan LocalStorage",
    image: "laptop.png",
    tagsHtml: ["HTML"],
    tagsCss: ["CSS"],
    tagsJs: ["JavaScript"],
    link: "https://github.com/h4runn/Tugas-Kalkulator-JavaScript"
},
{
    title: "Lampu Merah",
    description: 
    "Project simulasi lampu lalu lintas yang di loopingkan menggunakan logika Javascript",
    image: "gacor.png",
    tagsHtml: ["HTML"],
    tagsCss: ["CSS"],
    tagsJs: ["JavaScript"],
    link: "https://github.com/h4runn/traffic-lights",
},
{
    title: "Calculator Web Interaktif",
    description: 
    "Sebuah aplikasi kalkulator sederhana yang dibangun dengan HTML, CSS, dan JavaScript. Menggunakan logika operasi matematika dasar dan manipulasi DOM.",
    image: "calculator.png",
    tagsHtml: ["HTML"],
    tagsCss: ["CSS"],
    tagsJs: ["JavaScript"],
    link: "https://github.com/h4runn/Tugas-Kalkulator-JavaScript",
},
]

const proyek = document.getElementById("proyek");
for(let i = 0; i < projects1.length; i++) {
    let project = projects1[i]

    let kartu = document.createElement("div");
    kartu.className = "kartu"

    let judul = document.createElement("h2");
    judul.textContent = project.title;

    let bungkus = document.createElement("div");
    bungkus.className = "hm";

    let tagsContainer = document.createElement("div");
    tagsContainer.className = "tags"

    let tags1 = document.createElement("span");
    tags1.className = "style";
    tags1.textContent = project.tagsHtml;

    let tags2 = document.createElement("span");
    tags2.className = "style"
    tags2.textContent = project.tagsCss;

    let tags3 = document.createElement("span");
    tags3.className = "style"
    tags3.textContent = project.tagsJs;

    let img = document.createElement("img");
    img.src = project.image;
    img.className = "proyek-img";

    let imgLink = document.createElement("a");
    imgLink.textContent = "Klik Di Sini";    
    imgLink.href = project.link;
    imgLink.target = "blank"
    imgLink.className = "link"

    let description = document.createElement("p");
    description.textContent = project.description;

    kartu.appendChild(img); 
    kartu.appendChild(bungkus);
    bungkus.appendChild(tagsContainer);
    tagsContainer.appendChild(tags1);
    tagsContainer.appendChild(tags2);
    tagsContainer.appendChild(tags3);
    bungkus.appendChild(judul);
    bungkus.appendChild(description);
    bungkus.appendChild(imgLink);

    proyek.appendChild(kartu);

}



const projects3 = [
    {
    judul: "HTML",
    deskripsi: 
    "Saya mempelajari dasar struktur web seperti membuat teks, gambar, link, dan elemen halaman menggunakan HTML.",
    gambar: "html.png",
},
{
    judul: "CSS",
    deskripsi: 
    "Saya mempelajari cara mengatur tampilan web, mulai dari warna, layout, hingga membuat desain yang lebih rapi dan responsif.",
    gambar: "css.png",
},
{
    judul: "JavaScript",
    deskripsi: 
    "Saya mempelajari logika dasar untuk membuat web lebih interaktif, seperti penggunaan variabel, fungsi, event, dan manipulasi DOM.",
    gambar: "js.png",
},
]

const learn = document.getElementById("learn");
for(let i=0; i<projects3.length; i++){
    let pelajaran = projects3[i]

    let card = document.createElement("div");
    card.className = "card";

    let teksJudul = document.createElement("h2");
    teksJudul.textContent = pelajaran.judul;

    let komen = document.createElement("P");
    komen.textContent = pelajaran.deskripsi

    let foto = document.createElement("img");
    foto.src = pelajaran.gambar;
    foto.className = "learn-img";

    card.appendChild(foto);
    card.appendChild(teksJudul);
    card.appendChild(komen);

    learn.appendChild(card);
}

