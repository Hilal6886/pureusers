{/*import React, { useState } from 'react';
import './ServicesForm.css';
import { FaPlus } from 'react-icons/fa';
import firebase from 'firebase/app';
import 'firebase/firestore';
import IconPicker from 'react-icons-picker';

const  AddServices = () => {
  const [service, setService] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState(null);

  const handleServiceChange = (event) => {
    setService(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleIconChange = (selectedIcon) => {
    setIcon(selectedIcon);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const db = firebase.firestore();
  
    db.collection('services').add({
      service,
      description,
      icon: icon ? icon.iconName : null,
    })
      .then(() => {
        setService('');
        setDescription('');
        setIcon(null);
      })
      .catch((error) => {
        console.error('Error adding service: ', error);
      });
  }
  return (
    <div className="services-form">
      <h2>Add a New Service</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="service">Service:</label>
        <input type="text" id="service" value={service} onChange={handleServiceChange} required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange} required />

        <label htmlFor="icon">Icon:</label>
        <IconPicker
          defaultValue={icon}
          onSelect={handleIconChange}
        />

        <button type="submit"><FaPlus /> Add Service</button>
      </form>
    </div>
  );
}

export default AddServices;

*/}