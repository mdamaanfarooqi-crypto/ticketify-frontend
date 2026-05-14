async function Register(BASE_URL, formData) {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return { success: true };
    } else {
      let errorMessage = 'Registration failed';
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || `Server error (${response.status})`;
      } catch {
        errorMessage = `Server error (${response.status})`;
      }
      return { success: false, error: errorMessage };
    }
  } catch (error) {
    return { success: false, error: 'Cannot connect to server. Is the backend running?' };
  }
}

export default Register;