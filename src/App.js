import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', image: null });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData(prev => ({
        ...prev,
        image: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
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
        <div style={{ marginTop: '10px' }}>
          <label>Image: </label>
          <input 
            type="file" 
            name="image" 
            accept="image/*"
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
          {submittedData.image && (
            <div>
              <p><strong>Image:</strong></p>
              <img 
                src={URL.createObjectURL(submittedData.image)} 
                alt="Uploaded Preview" 
                style={{ maxWidth: '200px', marginTop: '10px' }} 
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;