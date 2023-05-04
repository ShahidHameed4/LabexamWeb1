
import './style.css'
const login = () => {


    const handleSubmit = (e) => {
        e.preventDefault(); // prevent form from submitting
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        fetch('http://localhost:3001/api/user/login/', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('token', data.token); // save token in local storage
          console.log(data);
          localStorage.setItem('user', JSON.stringify(data.user)); // save user in local storage

          if(data.role === 'admin')
            window.location.href = './AddJob.html'; // redirect to dashboard
          else
            window.location.href = './Dashboard.html'; // redirect to dashboard
        })
        .catch(error => console.error(error));


    
    }


    return (
        <div class="container">
      <form action="" method="post" onsubmit={handleSubmit}>
        <h2>Login</h2>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
        <input type="submit" value="Login"/>
      </form>
    </div>
    )
}

export default login