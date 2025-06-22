// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });
});

// Form submission and resume generation
function toggleSections() {
    document.getElementById("part1").style.display = "block";
    document.getElementById("part2").style.display = "none";
}

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const degree = document.getElementById("degree").value;
    const institution = document.getElementById("institution").value;
    const gradYear = document.getElementById("grad-year").value;
    const cgpa = document.getElementById("CGPA").value;
    const skills = document.getElementById("skills-input").value.split(',');
    const internship = document.getElementById("internship").value;
    const projectTitle1 = document.getElementById("project-title1").value;
    const projectDesc1 = document.getElementById("project-desc1").value;
    const projectTitle2 = document.getElementById("project-title2").value;
    const projectDesc2 = document.getElementById("project-desc2").value;
    const projectTitle3 = document.getElementById("project-title3").value;
    const projectDesc3 = document.getElementById("project-desc3").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;

    // Handle image upload
    const imageInput = document.getElementById("imageInput");
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("resume-photo").src = e.target.result;
        };
        reader.readAsDataURL(imageInput.files[0]);
    }

    // Update resume preview
    document.getElementById("rname").textContent = name;
    document.getElementById("remail").textContent = email;
    document.getElementById("rmobileno").textContent = phone;
    document.getElementById("raddress").textContent = address;
    
    // Education
    document.getElementById("rdegree").textContent = degree;
    document.getElementById("rinstitution").textContent = institution;
    document.getElementById("ryear").textContent = gradYear;
    document.getElementById("rcgpa").textContent = cgpa;

    // Skills
    const skillsList = document.getElementById("rskills");
    skillsList.innerHTML = "";
    skills.forEach(skill => {
        if (skill.trim()) {
            const li = document.createElement("li");
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        }
    });

    // Projects
    document.getElementById("RPT1").textContent = projectTitle1;
    document.getElementById("RPD1").textContent = projectDesc1;
    document.getElementById("RPT2").textContent = projectTitle2;
    document.getElementById("RPD2").textContent = projectDesc2;
    document.getElementById("RPT3").textContent = projectTitle3;
    document.getElementById("RPD3").textContent = projectDesc3;

    // Contact
    document.getElementById("rlinkedin").textContent = linkedin;
    document.getElementById("rgithub").textContent = github;

    // Show the resume preview and hide the form
    document.getElementById("part1").style.display = "none";
    document.getElementById("part2").style.display = "block";

    document.getElementById('downloadPdf').addEventListener('click', () => {
  const resumeElement = document.getElementById('print'); 
  
  const options = {
    margin: 10,
    filename: 'my_resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // Generate PDF
  html2pdf().from(resumeElement).set(options).save();
});
});
