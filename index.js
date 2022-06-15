const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (name, callback) => {
    const nameSorting = callback(name)
    const containerSorter = []
    for (index = 0; index < nameSorting.length; index++) {
        containerSorter.push(`${index+1}. ${nameSorting[index]}`)
    }

    return containerSorter
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (name) => {
        return name.sort()
    }
    // TODO: Fungsi untuk mengurutkan array of string secara descending
    // mengembalikan array yang sudah diurutkan
const sortDescending = (name) => {
    return name.sort().reverse()
};

// ! JANGAN DIMODIFIKASI
(function main() {
    console.log(sorter ?.(names, sortAscending) ?.join("\n"));
    console.log(sorter ?.(names, sortDescending) ?.join("\n"));
})();

module.exports = {
    sorter,
    sortAscending,
    sortDescending,
    names,
};
