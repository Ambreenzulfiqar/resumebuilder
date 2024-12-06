document.getElementById('generateResumeBtn').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
  
    const jobTitle = document.getElementById('jobTitle').value;
    const companyName = document.getElementById('companyName').value;
    const jobDescription = document.getElementById('jobDescription').value;
  
    const school = document.getElementById('school').value;
    const degree = document.getElementById('degree').value;
    const gradYear = document.getElementById('gradYear').value;
  
    const resumeContent = `
      <div class="resume-header">
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
      </div>
      
      <h3>Work Experience</h3>
      <ul>
        <li><strong>${jobTitle}</strong> at ${companyName}</li>
        <li>${jobDescription}</li>
      </ul>
      
      <h3>Education</h3>
      <ul>
        <li><strong>${degree}</strong> from ${school} (${gradYear})</li>
      </ul>
    `;
  
    document.getElementById('generatedResume').innerHTML = resumeContent;
  });
  