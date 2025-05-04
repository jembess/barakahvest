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
