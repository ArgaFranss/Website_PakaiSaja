const outfit = {
    atasan: {
        putih: [
            { pasangan: "Bawahan Cream", file: "putih-krem.jpg" },
            { pasangan: "Bawahan Olive", file: "putih-olive.jpg" },
            { pasangan: "Bawahan Cokelat", file: "putih-cokelat.jpg" }
        ],

        cream: [
            { pasangan: "Bawahan Putih", file: "cream-putih.jpg" },
            { pasangan: "Bawahan Olive", file: "cream-olive.jpg" },
            { pasangan: "Bawahan Cokelat", file: "cream-cokelat.jpg" }
        ],

        olive: [
            { pasangan: "Bawahan Putih", file: "olive-putih.jpg" },
            { pasangan: "Bawahan Cream", file: "olive-cream.jpg" },
            { pasangan: "Bawahan Cokelat", file: "olive-cokelat.jpg" }
        ],

        cokelat: [
            { pasangan: "Bawahan Putih", file: "cokelat-putih.jpg" },
            { pasangan: "Bawahan Cream", file: "cokelat-cream.jpg" },
            { pasangan: "Bawahan Olive", file: "cokelat-olive.jpg" }
        ]
    },

    bawahan: {
        putih: [
            { pasangan: "Atasan Cream", file: "cream-putih.jpg" },
            { pasangan: "Atasan Olive", file: "olive-putih.jpg" },
            { pasangan: "Atasan Cokelat", file: "cokelat-putih.jpg" }
        ],

        cream: [
            { pasangan: "Atasan Putih", file: "putih-krem.jpg" },
            { pasangan: "Atasan Olive", file: "olive-cream.jpg" },
            { pasangan: "Atasan Cokelat", file: "cokelat-cream.jpg" }
        ],

        olive: [
            { pasangan: "Atasan Putih", file: "putih-olive.jpg" },
            { pasangan: "Atasan Cream", file: "cream-olive.jpg" },
            { pasangan: "Atasan Cokelat", file: "cokelat-olive.jpg" }
        ],

        cokelat: [
            { pasangan: "Atasan Putih", file: "putih-cokelat.jpg" },
            { pasangan: "Atasan Cream", file: "cream-cokelat.jpg" },
            { pasangan: "Atasan Olive", file: "olive-cokelat.jpg" }
        ]
    }
};

function tampilkanOutfit() {
    const jenis = document.getElementById("jenis").value;
    const warna = document.getElementById("warna").value;
    const hasil = document.getElementById("hasil");
    const judul = document.getElementById("judulHasil");

    hasil.innerHTML = "";

    const daftar = outfit[jenis][warna];

    judul.textContent = "Pilihan " + jenis + " warna " + warna;

    daftar.forEach(function (item) {
        hasil.innerHTML += `
            <div class="kartu">
                <img src="images/${item.file}" alt="${warna} dengan ${item.pasangan}">
                <h4>${warna} + ${item.pasangan}</h4>
                <p>Kombinasi warna untuk inspirasi outfit sehari-hari.</p>
            </div>
        `;
    });
}

document.getElementById("jenis").addEventListener("change", tampilkanOutfit);
document.getElementById("warna").addEventListener("change", tampilkanOutfit);

document.getElementById("formSaran").addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("pesanForm").textContent =
        "Terima kasih! Saran kamu sudah diterima.";

    this.reset();
});

tampilkanOutfit();
