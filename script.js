document.getElementById("tempahanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telefon = document.getElementById("telefon").value;
    const kategori = document.getElementById("kategori").value;
    const slot = parseInt(document.getElementById("slot").value);

    const harga = 2500;
    const jumlah = harga * slot;

    document.getElementById("pengesahan").style.display = "block";

    document.getElementById("output").innerHTML = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>E-mel:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>Kategori:</strong> ${kategori}</p>
        <p><strong>Bilangan Slot:</strong> ${slot}</p>
        <p><strong>Jumlah Yuran:</strong> RM ${jumlah.toFixed(2)}</p>
    `;
});