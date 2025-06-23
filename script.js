document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
      }
    });
  });

  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const degree = document.getElementById('degree').value.trim();
    const institution = document.getElementById('institution').value.trim();
    const gradYear = document.getElementById('grad-year').value.trim();
    const cgpa = document.getElementById('CGPA').value.trim();
    const skills = document.getElementById('skills-input').value.split(',').map(s => s.trim());
    const internship = document.getElementById('internship').value;
    const projectTitle1 = document.getElementById('project-title1').value.trim();
    const projectDesc1 = document.getElementById('project-desc1').value.trim();
    const projectTitle2 = document.getElementById('project-title2').value.trim();
    const projectDesc2 = document.getElementById('project-desc2').value.trim();
    const projectTitle3 = document.getElementById('project-title3').value.trim();
    const projectDesc3 = document.getElementById('project-desc3').value.trim();
    const linkedin = document.getElementById('linkedin').value.trim();
    const github = document.getElementById('github').value.trim();

    const imageInput = document.getElementById('imageInput');
    if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('resume-photo').src = e.target.result;
      };
      reader.readAsDataURL(imageInput.files[0]);
    }

    document.getElementById('rname').textContent = name;
    document.getElementById('remail').textContent = email;
    document.getElementById('rmobileno').textContent = phone;
    document.getElementById('raddress').textContent = address;

    document.getElementById('rdegree').textContent = degree;
    document.getElementById('rinstitution').textContent = institution;
    document.getElementById('ryear').textContent = gradYear;
    document.getElementById('rcgpa').textContent = cgpa;

    const skillsList = document.getElementById('rskills');
    skillsList.innerHTML = '';
    skills.forEach(skill => {
      if (skill) {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
      }
    });

    document.getElementById('RPT1').textContent = projectTitle1;
    document.getElementById('RPD1').textContent = projectDesc1;
    document.getElementById('RPT2').textContent = projectTitle2;
    document.getElementById('RPD2').textContent = projectDesc2;
    document.getElementById('RPT3').textContent = projectTitle3;
    document.getElementById('RPD3').textContent = projectDesc3;

    document.getElementById('rlinkedin').textContent = linkedin;
    document.getElementById('rgithub').textContent = github;

    document.getElementById('part1').style.display = 'none';
    document.getElementById('part2').style.display = 'block';
  });
});

function toggleSections() {
  document.getElementById('part1').style.display = 'block';
  document.getElementById('part2').style.display = 'none';
}
