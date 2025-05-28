//Registration Logic

document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault(); 

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const res = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
      credentials: 'include',
    });

    const data = await res.json();
    alert(data.message);
  } catch (err) {
    alert('Error: ' + err.message);
  }
});

// OTP Logic

document.getElementById('otp-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('otp-email').value.trim();
  const otp = document.getElementById('otp').value.trim();

  try {
    const res = await fetch('http://localhost:3000/api/auth/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp }),
      credentials: 'include',
    });

    const data = await res.json();
    alert(data.message);
  } catch (err) {
    alert('Error: ' + err.message);
  }
});