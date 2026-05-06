import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generarReporteCajaPDF = (fecha, resumen, topProductos, historial) => {
  // Inicializar documento PDF
  const doc = new jsPDF();

  // 1. ENCABEZADO
  doc.setFontSize(22);
  doc.setTextColor(234, 88, 12); // Color naranja
  doc.text("Taqueria Admin Taco", 14, 20);
  
  doc.setFontSize(16);
  doc.setTextColor(51, 65, 85); // Color slate-700
  doc.text("Reporte de Cierre de Caja", 14, 30);
  
  doc.setFontSize(12);
  doc.setTextColor(100, 116, 139);
  doc.text(`Fecha del reporte: ${fecha}`, 14, 38);

  // 2. RESUMEN DE VENTAS (Métricas)
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(14, 45, 182, 25, 3, 3, "FD"); // Caja de fondo

  doc.setFontSize(12);
  doc.setTextColor(71, 85, 105);
  doc.text("Total Ventas", 20, 53);
  doc.text("Transacciones", 85, 53);
  doc.text("Ticket Promedio", 145, 53);

  doc.setFontSize(14);
  doc.setTextColor(15, 23, 42); // Texto oscuro y negrita
  doc.setFont("helvetica", "bold");
  doc.text(`$${resumen.totalVentas.toFixed(2)}`, 20, 62);
  doc.text(`${resumen.transacciones}`, 85, 62);
  doc.text(`$${resumen.ticketPromedio.toFixed(2)}`, 145, 62);
  doc.setFont("helvetica", "normal"); // Regresar a fuente normal

  let startY = 85;

  // 3. TABLA: TOP 5 PRODUCTOS
  if (topProductos && topProductos.length > 0) {
    doc.setFontSize(14);
    doc.setTextColor(15, 23, 42);
    doc.text("Top 5 Productos Más Vendidos", 14, startY);

    const topData = topProductos.map((prod, index) => [
      `#${index + 1}`,
      `${prod.nombre}\n${prod.cantidad} unidades vendidas`,
      `$${prod.total.toFixed(2)}`
    ]);

    autoTable(doc, {
      startY: startY + 5,
      head: [["Ranking", "Producto", "Total Generado"]],
      body: topData,
      theme: "grid",
      headStyles: { fillColor: [234, 88, 12], textColor: 255 },
      styles: { cellPadding: 4, fontSize: 10, valign: 'middle' },
    });

    startY = doc.lastAutoTable.finalY + 15;
  }

  // 4. TABLA: HISTORIAL DE VENTAS
  if (historial && historial.length > 0) {
    // Si la tabla anterior dejó poco espacio, pasamos a otra página
    if (startY > 230) {
      doc.addPage();
      startY = 20;
    }

    doc.setFontSize(14);
    doc.setTextColor(15, 23, 42);
    doc.text(`Historial de Ventas - ${fecha}`, 14, startY);

    // Mapeamos los datos de las ventas para la tabla
    const historialData = historial.map(venta => {
      // Unimos todos los productos de esa venta con un salto de línea
      const productosStr = venta.productos.map(p => p.nombre).join("\n\n");
      const cantidadesStr = venta.productos.map(p => `x${p.cantidad}`).join("\n\n");
      
      return [
        venta.hora,
        productosStr,
        cantidadesStr,
        `$${venta.total.toFixed(2)}`
      ];
    });

    autoTable(doc, {
      startY: startY + 5,
      head: [["HORA", "PRODUCTOS", "CANTIDAD", "TOTAL"]],
      body: historialData,
      theme: "striped",
      headStyles: { fillColor: [71, 85, 105], textColor: 255 },
      styles: { cellPadding: 4, fontSize: 10, valign: 'middle' },
      columnStyles: {
        1: { cellWidth: 80 } 
      }
    });
  }

  // Descargar el archivo
  // Reemplaza las barras de la fecha para que el nombre del archivo sea válido
  const nombreArchivo = `Reporte_Ventas_${fecha.replace(/\//g, "-")}.pdf`;
  doc.save(nombreArchivo);
}