import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange} 
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Email: </label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange} 
          />
        </div>
        <button type="submit" style={{ marginTop: '15px' }}>Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '30px' }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
