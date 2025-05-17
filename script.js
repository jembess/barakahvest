<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
    // ===== FORM KUIS =====
    const quizForm = document.getElementById("quizForm");
    if (quizForm) {
      quizForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const usia = document.querySelector('input[name="usia"]:checked')?.value;
        const risiko = document.querySelector('input[name="risiko"]:checked')?.value;
  
        localStorage.setItem("usia", usia);
        localStorage.setItem("risiko", risiko);
        window.location.href = "result.html";
      });
    }
  
    // ===== HASIL RISIKO =====
    const hasil = document.getElementById("hasilRisiko");
    const rekom = document.getElementById("rekomendasiInvestasi");
    if (hasil && rekom) {
      const usia = localStorage.getItem("usia");
      const risiko = localStorage.getItem("risiko");
  
      hasil.textContent = `Usia: ${usia}, Risiko: ${risiko}`;
  
      if (risiko === "rendah") {
        rekom.textContent = "Rekomendasi: Deposito Syariah & Sukuk Ritel";
      } else if (risiko === "sedang") {
        rekom.textContent = "Rekomendasi: Reksadana Syariah Pasar Uang & Pendapatan Tetap";
      } else if (risiko === "tinggi") {
        rekom.textContent = "Rekomendasi: Reksadana Syariah Saham & Saham Syariah";
      }
    }
  
    // ===== FORM NAMA & EMAIL =====
    const userForm = document.getElementById("userForm");
    const ucapanBox = document.getElementById("ucapanSelamat");
  
    if (userForm && ucapanBox) {
      // Tampilkan pesan jika user sudah pernah isi
      const namaTersimpan = localStorage.getItem("userNama");
      if (namaTersimpan) {
        ucapanBox.innerText = `Selamat datang kembali, ${namaTersimpan}!`;
      }
  
      userForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const namaInput = document.getElementById("nama");
        const emailInput = document.getElementById("email");
  
        const nama = namaInput.value.trim();
        const email = emailInput.value.trim();
  
        // Reset error style (jika kamu pakai style khusus error)
        namaInput.classList.remove("input-error");
        emailInput.classList.remove("input-error");
  
        // Validasi
        if (nama === "" || email === "") {
          ucapanBox.innerText = "Nama dan Email wajib diisi!";
          if (nama === "") namaInput.classList.add("input-error");
          if (email === "") emailInput.classList.add("input-error");
          return;
        }
  
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailValid) {
          ucapanBox.innerText = "Format email tidak valid.";
          emailInput.classList.add("input-error");
          return;
        }
  
        // Simpan
        localStorage.setItem("userNama", nama);
        localStorage.setItem("userEmail", email);
        ucapanBox.innerText = `Terima kasih sudah bergabung, ${nama}!`;
      });
    }
  });
  
=======
// ========== BAGIAN HASIL PROFIL RISIKO ==========
const hasil = localStorage.getItem("profilRisiko");

if (document.getElementById("hasilRisiko")) {
  document.getElementById("hasilRisiko").innerText = hasil || "Belum mengisi kuis.";

  const rekomendasiBox = document.createElement("div");
  rekomendasiBox.className = "result-box";
  document.querySelector(".hasil-ulang").appendChild(rekomendasiBox);

  if (hasil?.includes("Konservatif")) {
    rekomendasiBox.innerHTML = `
      <h3>Rekomendasi Investasi:</h3>
      <ul>
        <li>✅ Sukuk Ritel</li>
        <li>✅ Deposito Syariah</li>
      </ul>`;
  } else if (hasil?.includes("Moderat")) {
    rekomendasiBox.innerHTML = `
      <h3>Rekomendasi Investasi:</h3>
      <ul>
        <li>✅ Reksa Dana Syariah Campuran</li>
        <li>✅ Sukuk Korporasi</li>
        <li>✅ Sukuk Pemerintah</li>
      </ul>`;
  } else if (hasil?.includes("Agresif")) {
    rekomendasiBox.innerHTML = `
      <h3>Rekomendasi Investasi:</h3>
      <ul>
        <li>✅ Saham Syariah</li>
        <li>✅ Reksa Dana Saham Syariah</li>
        <li>✅ ETF Syariah</li>
      </ul>`;
  }
}

// ========== BAGIAN FORM NAMA & EMAIL ==========
if (document.getElementById("userForm")) {
  // Saat submit form
  document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;

    localStorage.setItem("userNama", nama);
    localStorage.setItem("userEmail", email);

    document.getElementById("ucapanSelamat").innerText = `Terima kasih sudah bergabung, ${nama}!`;
  });

  // Saat halaman dibuka kembali
  const namaTersimpan = localStorage.getItem("userNama");
  if (namaTersimpan) {
    document.getElementById("ucapanSelamat").innerText = `Selamat datang kembali, ${namaTersimpan}!`;
  }
}
>>>>>>> fa0b7d32dd946dbd4d97ecb175f550b20ec7e977
