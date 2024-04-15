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
        
         // Jika hari ini bukan tanggal pengambilan barang, tampilkan jadwal pengambilan selanjutnya
         if (today !== jadwalFormatted && today !== nextJadwalFormatted) {
            document.getElementById('jadwalPengambilan').innerHTML = '<p><b>Tidak ada jadwal</b></p>';
        } else {
            document.getElementById('jadwalPengambilan').innerHTML = '<p>Jadwal pengambilan barang: ' + jadwalFormatted + ' (Grup ' + group + ')</p>';
        }
            // Jika hari ini bukan tanggal pengambilan barang, tampilkan jadwal pengambilan selanjutnya
            if (today !== jadwalFormatted && today !== nextJadwalFormatted) {
                document.getElementById('pemberitahuan').innerHTML = '<p>Jadwal selanjutnya untuk <b>Grup ' + nextGroup + ':</b> ' + nextJadwalFormatted + '</p>';
            } else {
                document.getElementById('pemberitahuan').innerHTML = '<p>Jadwal pengambilan barang: ' + jadwalFormatted + ' (Grup ' + group + ')</p>';
            }
    }
});