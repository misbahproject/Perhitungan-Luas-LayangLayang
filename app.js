const ppForm = document.getElementById("ppForm");
const alas = document.getElementById("alas");
const tinggi = document.getElementById("tinggi");
const demoContainer = document.getElementById("demoContainer");

const hasilHitung = JSON.parse(localStorage.getItem("segitiga")) || [];

const addPp = (alas, tinggi, hasil) => {
  hasilHitung.push({
    alas,
    tinggi,
    hasil,
  });

  localStorage.setItem("segitiga", JSON.stringify(hasilHitung));

  return { alas, tinggi, hasil };
};

const createSegitiga = ({ alas, tinggi, hasil }) => {
  const segitigaDiv = document.createElement("div");
  const alasPp = document.createElement("p");
  const tinggiPp = document.createElement("p");
  const hasilnya = document.createElement("h2");
  const hr = document.createElement("hr");

  alasPp.innerHTML = "Nilai Alas : " + alas;
  tinggiPp.innerHTML = "Nilai Tinggi : " + tinggi;
  hasilnya.innerHTML = "Hasilnya adalah  : " + hasil;

  segitigaDiv.append(alasPp, tinggiPp, hasilnya, hr);
  demoContainer.appendChild(segitigaDiv);
};

hasilHitung.forEach(createSegitiga);

ppForm.onsubmit = (e) => {
  e.preventDefault();

  const vAlas = alas.value;
  const vTinggi = tinggi.value;
  const luas = (vAlas * vTinggi) / 2;

  const newPp = addPp(vAlas, vTinggi, luas);

  createSegitiga(newPp);

  alas.value = "";
  tinggi.value = "";
};
