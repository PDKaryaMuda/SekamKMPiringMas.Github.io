document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan tanggal hari ini
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    document.getElementById('tanggalHariIni').innerHTML = '<p>Tanggal hari ini: ' + today + '</p>';

 // Menghitung jadwal pengambilan barang
 var startDate = new Date('2024-04-14'); // Tanggal mulai jadwal
 var group = 'A'; // Grup pertama
 var daysToAdd = group === 'A' ? 0 : 4; // Jika grup B, tambahkan 4 hari
 var jadwalPengambilan = new Date(startDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
 var jadwalFormatted = String(jadwalPengambilan.getDate()).padStart(2, '0') + '/' + String(jadwalPengambilan.getMonth() + 1).padStart(2, '0') + '/' + jadwalPengambilan.getFullYear();
 document.getElementById('jadwalPengambilan').innerHTML = 'Tanggal :' + jadwalFormatted + ' Pengambilan sekam untuk <b>Grup ' + group + '</b></p>';
    
    // Pemberitahuan jika hari ini adalah tanggal pengambilan barang
    if (today === jadwalFormatted) {
        document.getElementById('pemberitahuan').innerHTML = '<p><b>>> HARI INI JADWAL PENGAMBILAN SEKAM <<</b></</p>';
    } else {
        // Menentukan grup berikutnya
        var nextGroup = group === 'A' ? 'B' : 'A';
        // Menghitung tanggal jadwal pengambilan untuk grup berikutnya
        var nextDaysToAdd = nextGroup === 'A' ? 0 : 4;
        var nextJadwalPengambilan = new Date(startDate.getTime() + nextDaysToAdd * 24 * 60 * 60 * 1000);
        var nextJadwalFormatted = String(nextJadwalPengambilan.getDate()).padStart(2, '0') + '/' + String(nextJadwalPengambilan.getMonth() + 1).padStart(2, '0') + '/' + nextJadwalPengambilan.getFullYear();
        
        // Jika bukan jadwal dari kedua grup, tampilkan pemberitahuan "Tidak ada jadwal"
        if (today !== jadwalFormatted && today !== nextJadwalFormatted) {
            document.getElementById('pemberitahuan').innerHTML = '<p>Tidak ada jadwal.</p>';
        } else {
            document.getElementById('pemberitahuan').innerHTML = '<p>Jadwal selanjutnya untuk Grup ' + nextGroup + ': ' + nextJadwalFormatted + '</p>';
        }
    }
});