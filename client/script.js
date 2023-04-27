const searchForm = document.getElementById('search-form');
const jobList = document.getElementById('job-list');

searchForm.addEventListener('submit', event => {
  event.preventDefault(); // prevent form from submitting
  const keyword = document.getElementById('keyword').value;

  const token = localStorage.getItem('token');

// Retrieve job data from API and include token in request headers
fetch('http://localhost:3001/api/quiz/get/', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
    .then(response => response.json())
    .then(jobs => {
      // Filter jobs based on keyword
      const filteredJobs = jobs.filter(job => job.quizName.toLowerCase().includes(keyword.toLowerCase()));
      // Clear existing job list
      jobList.innerHTML = '';
      // Add filtered jobs to table
      filteredJobs.forEach(job => {
        const row = document.createElement('tr');
        const titleCell = document.createElement('td');
        titleCell.textContent = job.quizName;
        row.appendChild(titleCell);
        const locationCell = document.createElement('td');
        locationCell.textContent = job.quizDescription;
        row.appendChild(locationCell);
        const typeCell = document.createElement('td');
        const date1 =new Date(job.quizDate)
        typeCell.textContent = (date1).getDay() + "/" + ((date1).getMonth()+1) + "/" + (date1).getFullYear() +"";
        row.appendChild(typeCell);
        const companyCell = document.createElement('td');
        companyCell.textContent = job.quizLength;
        row.appendChild(companyCell);
        const applyCell = document.createElement('td');
        const applyBtn = document.createElement('button');
        applyBtn.textContent = 'Apply';
        applyBtn.classList.add('apply-btn');
        applyBtn.addEventListener('click', () => {
          // Add logic to apply for quiz
          alert('You have applied for this quiz!');
          localStorage.setItem('quizNo', job._id);
          window.location.href = 'Quiz.html';

        });
        applyCell.appendChild(applyBtn);
        row.appendChild(applyCell);
        jobList.appendChild(row);
      });
    })
    .catch(error => console.error(error));
});
