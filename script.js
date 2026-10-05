// Función para calcular montos económicos automáticamente
function calcularTotal() {
    const valNoche = parseFloat(document.getElementById('valNoche').value) || 0;
    const numNoches = parseFloat(document.getElementById('numNoches').value) || 0;
    const impuestos = parseFloat(document.getElementById('impuestos').value) || 0;
    const descuentos = parseFloat(document.getElementById('descuentos').value) || 0;

    const subtotal = valNoche * numNoches;
    const total = subtotal + impuestos - descuentos;

    document.getElementById('subtotal').value = subtotal > 0 ? subtotal : '';
    document.getElementById('total').value = total > 0 ? total : '';
}

// Función para descargar el archivo en PDF
function descargarPDF() {
    const elemento = document.getElementById('cotizacion-area');
    
    const opt = {
        margin:       [8, 8, 8, 8],
        filename:     'Cotizacion_Estefany_Travel.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(elemento).save();
}
