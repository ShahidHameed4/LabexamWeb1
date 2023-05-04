import './style2.css'

const quiz = () => {
    const searchForm = document.getElementById('search-form');
const jobList = document.getElementById('job-list');
const submitBtn = document.getElementById('submit1');
const nextBtn = document.getElementById('next');
let score =0;

    const handleSearch = (e) => {
        e.preventDefault(); // prevent form from submitting
        const keyword = document.getElementById('keyword').value;
      
        const token = localStorage.getItem('token');
        const quizNo = localStorage.getItem('quizNo');
        jobList.innerHTML = '';
      
      
      // Retrieve job data from API and include token in request headers
      fetch('http://localhost:3001/api/quiz/get/', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      
      })
          .then(response => response.json())
          .then(jobs => {
      
              // Filter jobs based on keyword
              console.log(jobs)
              
              for (let i = 0; i < jobs.length; i++) {
              if(jobs[i]._id==quizNo){
                  localStorage.setItem('quizQuestions', jobs[i].quizQuestions);
                  console.log(jobs[i].quizQuestions)
                  for (let j = 0; j < jobs[i].quizQuestions.length; j++) {
                      console.log(jobs[i].quizQuestions[j].question)
                      console.log(jobs[i].quizQuestions[j].option1)
                      console.log(jobs[i].quizQuestions[j].option2)
                      console.log(jobs[i].quizQuestions[j].option3)
                      console.log(jobs[i].quizQuestions[j].option4)
                      
                          const row = document.createElement('tr');
                          const titleCell = document.createElement('td');
                          titleCell.textContent = jobs[i].quizQuestions[j].question;
                          row.appendChild(titleCell);
                          const locationCell = document.createElement('td');
                          locationCell.innerHTML = "<select id=\"q"+j+"\" name=\"role\" required>   <option value=\""+jobs[i].quizQuestions[j].option1+"\">"+jobs[i].quizQuestions[j].option1+"</option> <option value=\""+jobs[i].quizQuestions[j].option2+"\">"+jobs[i].quizQuestions[j].option1+"</option> <option value=\""+jobs[i].quizQuestions[j].option2+"\">"+jobs[i].quizQuestions[j].option3+"</option> <option value=\""+jobs[i].quizQuestions[j].option4+"\">"+jobs[i].quizQuestions[j].option4+"</option>  </select>";
      
                          console.log(locationCell.innerHTML)
                          row.appendChild(locationCell);
                          jobList.appendChild(row);
                        
                  }
      
      
      
                  
              }
      
      
              }
          })
          .catch(error => console.error(error));


    }
    const handleNext = (e) => {
        const quizNo = localStorage.getItem('quizNo');
        const token = localStorage.getItem('token');
        const newScore = {
            quizScore: score,
            quizId: quizNo
        };
    
       
    
        try {
            const response =  fetch('http://localhost:3001/api/score/create', {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(newScore),
              });
        
            if (response.ok) {
              const data =  response.json();
        
              console.log('Quiz registered:', data);
            } else {
              console.log('Error registering Quiz:', response.status);
            }
            alert('Your Score is: '+score);
            window.location.href = 'Dashboard.html';
          } catch (error) {
            console.error('Error registering Quiz:', error);
          }

    }


    const handleSubmit1 = (e) => {
        e.preventDefault(); // prevent form from submitting

        const quiz = localStorage.getItem('quizQuestions');
        
        // console.log(quiz[0].answer)
    
    
        // for(let i=0;i<quiz.length;i++){
        //     // if(document.getElementById('q'+i).value==quiz[i].answer){
        //     //     score++;
        //     // }
        //     console.log(document.getElementById('q'+i).value)
        // }
        console.log(score)
        const token = localStorage.getItem('token');
        const quizNo = localStorage.getItem('quizNo');
        fetch('http://localhost:3001/api/quiz/get/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    
    })
        .then(response => response.json())
        .then(jobs => {
    
            // Filter jobs based on keyword
            console.log(jobs)
            
            for (let i = 0; i < jobs.length; i++) {
            if(jobs[i]._id==quizNo){
                localStorage.setItem('quizQuestions', jobs[i].quizQuestions);
                console.log(jobs[i].quizQuestions)
                for (let j = 0; j < jobs[i].quizQuestions.length; j++) {
                    console.log(document.getElementById('q'+j).value)
                    if(document.getElementById('q'+j).value==jobs[i].quizQuestions[j].answer){
                        score+=10;
                    }
    
                }
    
    
    
                
            }
    
    
            }
        
    
        })
        .catch(error => console.error(error));
    
        const newScore = {
            score: score,
            quizId: quizNo
        };
            console.log(score)
        
    
    
    }



    return(
        <div class="body1"> 

    
    <form id="search-form" onSubmit={handleSearch}>
      <label for="keyword">Search by keyword:</label>
      <input type="text" id="keyword" name="keyword"/>
      <button type="submit">Search</button>
    </form>
    <table class="job-listings">
      <thead>
        <tr>
          <th>Question</th>
          <th>Options</th>
          
        </tr>
      </thead>
      <tbody id="job-list">
      </tbody>
    </table>
    <button id="submit1" onSubmit={handleSubmit1} type="submit">Submit</button>
    <button id="next" onSubmit={handleNext} type="submit">Next</button>
    
</div>



    )}


export default quiz;