// PDF Download Function
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const country = document.getElementById('country').value;
  
    // Generate PDF content
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Gender: ${gender}`, 10, 30);
    doc.text(`Country: ${country}`, 10, 40);
  
    // Download the PDF
    doc.save('form-data.pdf');
  }
  
  // Excel Download Function
  function downloadExcel() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const country = document.getElementById('country').value;
  
    // Create a worksheet with the form data
    const data = [
      ['Field', 'Value'],
      ['Name', name],
      ['Email', email],
      ['Gender', gender],
      ['Country', country],
    ];
  
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Form Data');
  
    // Download the Excel file
    XLSX.writeFile(workbook, 'form-data.xlsx');
  }
  