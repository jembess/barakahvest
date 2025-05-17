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
  