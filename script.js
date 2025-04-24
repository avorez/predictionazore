function prediksi() {
  const golA = parseFloat(document.getElementById('golA').value);
  const golB = parseFloat(document.getElementById('golB').value);

  if (isNaN(golA) || isNaN(golB)) {
    alert("Isi semua data terlebih dahulu.");
    return;
  }

  const totalGol = golA + golB;

  // Over/Under
  const overUnder = totalGol > 2.5 ? "Over 2.5" : "Under 2.5";

  // Genap Ganjil
  const totalBulat = Math.round(totalGol);
  const genapGanjil = totalBulat % 2 === 0 ? "Genap" : "Ganjil";

  // Prediksi Menang
  let menang = "Imbang";
  if (golA > golB) menang = "Tim A Unggul";
  else if (golB > golA) menang = "Tim B Unggul";

  // Prediksi Skor Sederhana
  const skorA = Math.round(golA);
  const skorB = Math.round(golB);

  document.getElementById('hasil').innerHTML = `
    <h3>Hasil Prediksi</h3>
    <p><strong>Over/Under:</strong> ${overUnder}</p>
    <p><strong>Prediksi Menang:</strong> ${menang}</p>
    <p><strong>Total Gol Genap/Ganjil:</strong> ${genapGanjil}</p>
    <p><strong>Prediksi Skor:</strong> ${skorA} - ${skorB}</p>
    <hr>
    <h4>Penjelasan Prediksi:</h4>
    <ul>
      <li><strong>Over/Under 2.5:</strong> Total gol dari kedua tim. Over jika > 2.5, Under jika ≤ 2.5.</li>
      <li><strong>Prediksi Menang:</strong> Tim dengan rata-rata gol lebih tinggi diprediksi menang.</li>
      <li><strong>Genap/Ganjil:</strong> Total gol genap atau ganjil.</li>
      <li><strong>Prediksi Skor:</strong> Dibulatkan dari rata-rata gol tiap tim.</li>
    </ul>
  `;
}