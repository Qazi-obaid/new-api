document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".ul li a");
  const sections = document.querySelectorAll(".section");

  function showSection(id) {
    sections.forEach((section) => {
      if (section.id === id) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  showSection("home");

  navLinks.forEach((link) => link.classList.remove("active"));
  document.querySelector('.ul li a[href="#home"]').classList.add("active");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      showSection(targetId);

      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
  const contactForm = document.querySelector(".contact-form form");
  const contactSection = document.getElementById("contact");

  const tableContainer = document.createElement("div");
  tableContainer.innerHTML = `
    <h2>Submitted Data</h2>
    <table border="1" cellpadding="10" style="margin-top:20px; border-collapse:collapse; width:100%; background:white;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll Number</th>
          <th>Father Name</th>
          <th>Phone</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody id="formDataTable"></tbody>
    </table>
  `;
  contactSection.appendChild(tableContainer);

  const tableBody = document.getElementById("formDataTable");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = {};

      formData.forEach((value, key) => {
        data[key] = value;
      });

      console.log("Form Submitted:", data);

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${data.name || ""}</td>
        <td>${data["Roll number"] || ""}</td>
        <td>${data["father name"] || ""}</td>
        <td>${data.phone || ""}</td>
        <td>${data.message || ""}</td>
      `;
      tableBody.appendChild(row);
      contactForm.reset();
    });
  }
});