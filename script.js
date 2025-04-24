let nomor = 1;

function prediksi() {
  const teamA = document.getElementById('teamA').value;
  const teamB = document.getElementById('teamB').value;
  const mode = document.getElementById('mode').value;
  const pasaran = parseFloat(document.getElementById('pasaran').value);
  const oddsOver = parseFloat(document.getElementById('oddsOver').value);
  const oddsUnder = parseFloat(document.getElementById('oddsUnder').value);
  const teamAGoals = parseInt(document.getElementById('teamAGoals').value);
  const teamAConceded = parseInt(document.getElementById('teamAConceded').value);
  const teamBGoals = parseInt(document.getElementById('teamBGoals').value);
  const teamBConceded = parseInt(document.getElementById('teamBConceded').value);

  const rataGol = ((teamAGoals + teamBGoals) + (teamAConceded + teamBConceded)) / 20;
  const totalSkor = rataGol * (mode === "fulltime" ? 1 : 0.5);
  let hasilOU = totalSkor > pasaran ? "Over" : "Under";
  let hasilGG = Math.round(totalSkor) % 2 === 0 ? "Genap" : "Ganjil";
  let prediksiMenang = teamAGoals > teamBGoals ? teamA : (teamAGoals < teamBGoals ? teamB : "Draw");

  document.getElementById("result").innerHTML = `
    <div class="hasil">
      <strong>${teamA} vs ${teamB}</strong><br>
      <b>Mode:</b> ${mode}<br>
      <b>Prediksi:</b> ${prediksiMenang}<br>
      <b>Over/Under:</b> ${hasilOU} (${totalSkor.toFixed(2)})<br>
      <b>Ganjil/Genap:</b> ${hasilGG}<br>
    </div>
  `;

  tambahRiwayat(teamA, teamB, mode, prediksiMenang, hasilOU, hasilGG, totalSkor.toFixed(1));
}

function tambahRiwayat(teamA, teamB, mode, menang, ou, gg, skor) {
  const riwayat = document.getElementById('riwayat');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${nomor}</td>
    <td>${teamA}</td>
    <td>${teamB}</td>
    <td>${mode}</td>
    <td>${menang}</td>
    <td>${ou}</td>
    <td>${gg}</td>
    <td>${skor}</td>
    <td><button onclick="hapusRiwayat(this)">Delete</button></td>
  `;
  riwayat.appendChild(row);

  const rowScreenshot = row.cloneNode(true);
  document.getElementById("riwayatScreenshot").appendChild(rowScreenshot);
  nomor++;
}

function hapusRiwayat(button) {
  const row = button.closest('tr');
  row.remove();
}

function clearAllRiwayat() {
  const riwayat = document.getElementById('riwayat');
  riwayat.innerHTML = '';
  const riwayatScreenshot = document.getElementById('riwayatScreenshot');
  riwayatScreenshot.innerHTML = '';
  nomor = 1;
}

function tampilkanScreenshotMode() {
  document.getElementById("popupScreenshot").style.display = "flex";
}

function tutupScreenshotMode() {
  document.getElementById("popupScreenshot").style.display = "none";
}
