document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            window.location.href = href;
        });
    });
});
function buscar() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const result = document.getElementById("searchResult");
    let found = false;

    const genes = [
        { name: "BRCA1 y BRCA2", link: "brca1.html" },
        { name: "TP53", link: "tp53.html" },
        { name: "APOE", link: "apoe.html" },
        { name: "CFTR", link: "cftr.html" },
        { name: "INS", link: "ins.html" },
        { name: "Hemoglobina", link: "hemoglobina.html" },
        { name: "Actina y Miosina", link: "actina-miosina.html" },
        { name: "Colágeno", link: "colageno.html" },
        { name: "Albumina", link: "albumina.html" },
        { name: "Anticuerpos", link: "anticuerpos.html" }
    ];

    genes.forEach(gene => {
        if (gene.name.toLowerCase().includes(input)) {
            result.innerHTML = `<a href="${gene.link}" target="_blank">${gene.name}</a>`;
            found = true;
        }
    });

    if (!found) {
        result.textContent = "No se encontraron resultados.";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('geneChart').getContext('2d');
    const geneChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["BRCA1", "TP53", "APOE", "CFTR", "INS"],
            datasets: [{
                label: "Frecuencia de Mutación (%)",
                data: [15, 20, 8, 12, 5],
                backgroundColor: "rgba(75, 192, 192, 0.6)"
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Frecuencia de Mutación en Genes Seleccionados'
                }
            }
        }
    });
});
function exportar() {
    const data = [
        { name: "BRCA1 y BRCA2", description: "Reparación del ADN y prevención de cáncer" },
        { name: "TP53", description: "Guardián del genoma, regula el ciclo celular" },
        { name: "APOE", description: "Metabolismo de lípidos, relacionado con Alzheimer" },
        { name: "CFTR", description: "Transporte de cloro, relacionado con fibrosis quística" },
        { name: "INS", description: "Control de glucosa en sangre, insulina" },
        { name: "Hemoglobina", description: "Transporte de oxígeno en la sangre" },
        { name: "Actina y Miosina", description: "Contracción muscular y movimiento" },
        { name: "Colágeno", description: "Soporte estructural en tejidos" },
        { name: "Albumina", description: "Transporte de moléculas y mantenimiento osmótico" },
        { name: "Anticuerpos", description: "Defensa inmune contra patógenos" }
    ];

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "datos_genes.json";
    link.click();
}
