
// import React, { useState, useEffect, useRef } from 'react';
// import LifecycleEventService from '../services/LifecycleEventService';
// import { Link, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const LifecycleEventManagementPage = () => {
//   const [newEvent, setNewEvent] = useState({
//     relatedId: '',
//     eventType: '',
//     eventDate: '',
//     description: '',
//     category: ''
//   });
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const form = useRef();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = () => {
//     //const token = localStorage.getItem('token');
//     LifecycleEventService.getAllLifecycleEvents()
//       .then(response => {
//         setEvents(response);
//       })
//       .catch(error => {
//         console.error('Error fetching events:', error);
//       });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewEvent({ ...newEvent, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');

//     //const token = localStorage.getItem('token');
//     LifecycleEventService.addLifecycleEvent(newEvent)
//       .then(() => {
//         alert('Event added successfully');
//         setNewEvent({
//           relatedId: '',
//           eventType: '',
//           eventDate: '',
//           description: '',
//           category: ''
//         });
//         fetchEvents();
//       })
//       .catch(error => {
//         console.error('Error adding event:', error);
//         alert('An error occurred while adding event');
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const deleteEvent = (eventId) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this event?');
//     if (confirmDelete) {
//       const token = localStorage.getItem('token');
//       LifecycleEventService.deleteLifecycleEvent(eventId, token)
//         .then(() => {
//           fetchEvents();
//         })
//         .catch(error => {
//           console.error('Error deleting event:', error);
//         });
//     }
//   };

//   const fetchEventById = async (eventId) => {
//     //const token = localStorage.getItem('token');
//     try {
//       const event = await LifecycleEventService.getLifecycleEventById(eventId);
//       setSelectedEvent(event);
//     } catch (error) {
//       console.error('Error fetching event by ID:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Lifecycle Event Management Page</h2>
//       <div className="card card-container">
//         <form onSubmit={handleSubmit} ref={form}>
//           <div className="mb-3">
//             <label htmlFor="relatedId" className="form-label">Related ID:</label>
//             <input type="text" className="form-control" id="relatedId" name="relatedId" value={newEvent.relatedId} onChange={handleInputChange} required />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="eventType" className="form-label">Event Type:</label>
//             <input type="text" className="form-control" id="eventType" name="eventType" value={newEvent.eventType} onChange={handleInputChange} required />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="eventDate" className="form-label">Event Date:</label>
//             <input type="date" className="form-control" id="eventDate" name="eventDate" value={newEvent.eventDate} onChange={handleInputChange} required />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="description" className="form-label">Description:</label>
//             <input type="text" className="form-control" id="description" name="description" value={newEvent.description} onChange={handleInputChange} required />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="category" className="form-label">Category:</label>
//             <input type="text" className="form-control" id="category" name="category" value={newEvent.category} onChange={handleInputChange} required />
//           </div>
//           <button type="submit" className="btn btn-primary" disabled={loading}>Add Event</button>
//         </form>
//       </div>

//       <table className="table mt-4">
//         <thead>
//           <tr>
//             <th>Event ID</th>
//             <th>Related ID</th>
//             <th>Event Type</th>
//             <th>Event Date</th>
//             <th>Description</th>
//             <th>Category</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {events.map(event => (
//             <tr key={event.eventId}>
//               <td>{event.eventId}</td>
//               <td>{event.relatedId}</td>
//               <td>{event.eventType}</td>
//               <td>{event.eventDate}</td>
//               <td>{event.description}</td>
//               <td>{event.category}</td>
//               <td>
//                 <button className="btn btn-primary" onClick={() => fetchEventById(event.eventId)}>View</button>
//                 <button className="btn btn-danger" onClick={() => deleteEvent(event.eventId)}>Delete</button>
//                 <button><Link to={`/update-lifecycleEvent/${event.eventId}`}> Update</Link></button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedEvent && (
//         <div>
//           <h3>Selected Event Details:</h3>
//           <p>Event ID: {selectedEvent.eventId}</p>
//           <p>Related ID: {selectedEvent.relatedId}</p>
//           <p>Event Type: {selectedEvent.eventType}</p>
//           <p>Event Date: {selectedEvent.eventDate}</p>
//           <p>Description: {selectedEvent.description}</p>
//           <p>Category: {selectedEvent.category}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LifecycleEventManagementPage;


// import React, { useState, useEffect, useRef } from 'react';
// import LifecycleEventService from '../services/LifecycleEventService';
// import { Link, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const LifecycleEventManagementPage = () => {
//   const [newEvent, setNewEvent] = useState({
//     relatedId: '',
//     eventType: '',
//     eventDate: '',
//     description: '',
//     category: ''
//   });
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const form = useRef();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = () => {
//     //const token = localStorage.getItem('token');
//     LifecycleEventService.getAllLifecycleEvents()
//       .then(response => {
//         setEvents(response);
//       })
//       .catch(error => {
//         console.error('Error fetching events:', error);
//       });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewEvent({ ...newEvent, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');

//     //const token = localStorage.getItem('token');
//     LifecycleEventService.addLifecycleEvent(newEvent)
//       .then(() => {
//         alert('Event added successfully');
//         setNewEvent({
//           relatedId: '',
//           eventType: '',
//           eventDate: '',
//           description: '',
//           category: ''
//         });
//         fetchEvents();
//       })
//       .catch(error => {
//         console.error('Error adding event:', error);
//         alert('An error occurred while adding event');
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const deleteEvent = (eventId) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this event?');
//     if (confirmDelete) {
//       const token = localStorage.getItem('token');
//       LifecycleEventService.deleteLifecycleEvent(eventId, token)
//         .then(() => {
//           fetchEvents();
//         })
//         .catch(error => {
//           console.error('Error deleting event:', error);
//         });
//     }
//   };

//   const fetchEventById = async (eventId) => {
//     //const token = localStorage.getItem('token');
//     try {
//       const event = await LifecycleEventService.getLifecycleEventById(eventId);
//       setSelectedEvent(event);
//     } catch (error) {
//       console.error('Error fetching event by ID:', error);
//     }
//   };

//   const generateReport = () => {
//     const header = ['Event ID', 'Related ID', 'Event Type', 'Event Date', 'Description', 'Category'];
//     const rows = events.map(event => [event.eventId, event.relatedId, event.eventType, event.eventDate, event.description, event.category]);

//     // Joining header and rows into a single array
//     const reportData = [header, ...rows];

//     // Converting array data into CSV format
//     const csvContent = reportData.map(row => row.join(',')).join('\n');

//     // Creating a blob with the CSV content
//     const blob = new Blob([csvContent], { type: 'text/csv' });
    
//     // Creating a URL for the blob and creating a link to trigger the download
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'event_report.csv');
//     document.body.appendChild(link);
    
//     // Clicking the link to trigger the download
//     link.click();
//   };

//   return (
//     <div className="container">
//       <h2>Lifecycle Event Management Page</h2>
//       <div className="card card-container">
//         <form onSubmit={handleSubmit} ref={form}>
//           <div className="mb-3">
//             <label htmlFor="relatedId" className="form-label">Related ID:</label>
//             <input type="text" className="form-control" id="relatedId" name="relatedId" value={newEvent.relatedId} onChange={handleInputChange} required />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="eventType" className="form-label">Event Type:</label>
//             <input type="text" className="form-control" id="eventType" name="eventType" value={newEvent.eventType} onChange={handleInputChange} required />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="eventDate" className="form-label">Event Date:</label>
//             <input type="date" className="form-control" id="eventDate" name="eventDate" value={newEvent.eventDate} onChange={handleInputChange} required />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="description" className="form-label">Description:</label>
//             <input type="text" className="form-control" id="description" name="description" value={newEvent.description} onChange={handleInputChange} required />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="category" className="form-label">Category:</label>
//             <input type="text" className="form-control" id="category" name="category" value={newEvent.category} onChange={handleInputChange} required />
//           </div>
//           <button type="submit" className="btn btn-primary" disabled={loading}>Add Event</button>
//         </form>
//       </div>

//       <table className="table mt-4">
//         <thead>
//           <tr>
//             <th>Event ID</th>
//             <th>Related ID</th>
//             <th>Event Type</th>
//             <th>Event Date</th>
//             <th>Description</th>
//             <th>Category</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {events.map(event => (
//             <tr key={event.eventId}>
//               <td>{event.eventId}</td>
//               <td>{event.relatedId}</td>
//               <td>{event.eventType}</td>
//               <td>{event.eventDate}</td>
//               <td>{event.description}</td>
//               <td>{event.category}</td>
//               <td>
//                 <button className="btn btn-primary" onClick={() => fetchEventById(event.eventId)}>View</button>
//                 <button className="btn btn-danger" onClick={() => deleteEvent(event.eventId)}>Delete</button>
//                 <button><Link to={`/update-lifecycleEvent/${event.eventId}`}> Update</Link></button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedEvent && (
//         <div>
//           <h3>Selected Event Details:</h3>
//           <p>Event ID: {selectedEvent.eventId}</p>
//           <p>Related ID: {selectedEvent.relatedId}</p>
//           <p>Event Type: {selectedEvent.eventType}</p>
//           <p>Event Date: {selectedEvent.eventDate}</p>
//           <p>Description: {selectedEvent.description}</p>
//           <p>Category: {selectedEvent.category}</p>
//         </div>
//       )}

//       <button className="btn btn-success" onClick={generateReport}>Generate Report</button>
//     </div>
//   );
// };

// export default LifecycleEventManagementPage;

// import React, { useState, useEffect, useRef } from 'react';
// import LifecycleEventService from '../services/LifecycleEventService';
// import { Link, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'C:\\Users\\praveenkumar.sg\\Documents\\react-hooks-jwt-auth\\src\\lifecycleventmanagementpage.css'; // Importing custom CSS file

// const LifecycleEventManagementPage = () => {
//   const [newEvent, setNewEvent] = useState({
//     relatedId: '',
//     eventType: '',
//     eventDate: '',
//     description: '',
//     category: ''
//   });
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [isDetailsVisible, setIsDetailsVisible] = useState(false);
//   const form = useRef();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = () => {
//     LifecycleEventService.getAllLifecycleEvents()
//       .then(response => {
//         setEvents(response);
//       })
//       .catch(error => {
//         console.error('Error fetching events:', error);
//       });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewEvent({ ...newEvent, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');

//     LifecycleEventService.addLifecycleEvent(newEvent)
//       .then(() => {
//         alert('Event added successfully');
//         setNewEvent({
//           relatedId: '',
//           eventType: '',
//           eventDate: '',
//           description: '',
//           category: ''
//         });
//         fetchEvents();
//       })
//       .catch(error => {
//         console.error('Error adding event:', error);
//         alert('An error occurred while adding event');
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const deleteEvent = (eventId) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this event?');
//     if (confirmDelete) {
//       LifecycleEventService.deleteLifecycleEvent(eventId)
//         .then(() => {
//           fetchEvents();
//         })
//         .catch(error => {
//           console.error('Error deleting event:', error);
//         });
//     }
//   };

//   const fetchEventById = async (eventId) => {
//     try {
//       const event = await LifecycleEventService.getLifecycleEventById(eventId);
//       setSelectedEvent(event);
//       setIsDetailsVisible(true); // Show details when fetched
//     } catch (error) {
//       console.error('Error fetching event by ID:', error);
//     }
//   };

//   const handleCloseDetails = () => {
//     setIsDetailsVisible(false); // Close details
//   };

//   const generateReport = () => {
//     const header = ['Event ID', 'Related ID', 'Event Type', 'Event Date', 'Description', 'Category'];
//     const rows = events.map(event => [event.eventId, event.relatedId, event.eventType, event.eventDate, event.description, event.category]);
//     const reportData = [header, ...rows];
//     const csvContent = reportData.map(row => row.join(',')).join('\n');
//     const blob = new Blob([csvContent], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'event_report.csv');
//     document.body.appendChild(link);
//     link.click();
//   };

//   return (
//     <div className="container">
//       <h2 className="page-title">Lifecycle Event Management Page</h2>
//       <div className="lifecycle-card-container">
//         <form onSubmit={handleSubmit} ref={form}>
//           <div className="form-group">
//             <label htmlFor="relatedId">Related ID:</label>
//             <input
//               type="text"
//               id="relatedId"
//               name="relatedId"
//               value={newEvent.relatedId}
//               onChange={handleInputChange}
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="eventType">Event Type:</label>
//             <input
//               type="text"
//               id="eventType"
//               name="eventType"
//               value={newEvent.eventType}
//               onChange={handleInputChange}
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="eventDate">Event Date:</label>
//             <input
//               type="date"
//               id="eventDate"
//               name="eventDate"
//               value={newEvent.eventDate}
//               onChange={handleInputChange}
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="description">Description:</label>
//             <input
//               type="text"
//               id="description"
//               name="description"
//               value={newEvent.description}
//               onChange={handleInputChange}
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="category">Category:</label>
//             <input
//               type="text"
//               id="category"
//               name="category"
//               value={newEvent.category}
//               onChange={handleInputChange}
//               className="form-control"
//               required
//             />
//           </div>
//           <button type="submit" className="btn-primary" disabled={loading}>
//             Add Event
//           </button>
//         </form>
//       </div>

//       <table className="table mt-4">
//         <thead>
//           <tr>
//             <th>Event ID</th>
//             <th>Related ID</th>
//             <th>Event Type</th>
//             <th>Event Date</th>
//             <th>Description</th>
//             <th>Category</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {events.map(event => (
//             <tr key={event.eventId}>
//               <td>{event.eventId}</td>
//               <td>{event.relatedId}</td>
//               <td>{event.eventType}</td>
//               <td>{event.eventDate}</td>
//               <td>{event.description}</td>
//               <td>{event.category}</td>
//               <td>
//                 <button className="btn-primary" onClick={() => fetchEventById(event.eventId)}>
//                   View
//                 </button>
//                 <button className="btn-danger" onClick={() => deleteEvent(event.eventId)}>
//                   Delete
//                 </button>
               
//                   <Link to={`/update-lifecycleEvent/${event.eventId}`} className="update">
//                     Update
//                   </Link>
                
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isDetailsVisible && selectedEvent && (
//         <div className="selected-device-ticket">
//           <button className="close-btn" onClick={handleCloseDetails}>
//             X
//           </button>
//           <div className="selected-device-details">
//             <h3 className="ticket-title">Selected Event Details:</h3>
//             <div className="ticket-text">
//               <p>
//                 <strong>Event ID:</strong> {selectedEvent.eventId}
//               </p>
//               <p>
//                 <strong>Related ID:</strong> {selectedEvent.relatedId}
//               </p>
//               <p>
//                 <strong>Event Type:</strong> {selectedEvent.eventType}
//               </p>
//               <p>
//                 <strong>Event Date:</strong> {selectedEvent.eventDate}
//               </p>
//               <p>
//                 <strong>Description:</strong> {selectedEvent.description}
//               </p>
//               <p>
//                 <strong>Category:</strong> {selectedEvent.category}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       <button className="lifecycle-btn-success" onClick={generateReport}>
//         Generate Report
//       </button>
//     </div>
//   );
// };

// export default LifecycleEventManagementPage;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeviceService from '../services/DeviceService';

const LifecycleEventManagementPage = () => {
  const initialEventState = {
    eventType: '',
    eventDate: '',
    description: '',
    category: ''
  };

  const [newEvent, setNewEvent] = useState(initialEventState);
  const [deviceId, setDeviceId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'deviceId') {
      setDeviceId(value);
    } else {
        setNewEvent(prevEvent => ({
        ...prevEvent,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure deviceId is provided before adding an event
    if (!deviceId) {
      alert('Please enter a Device ID');
      return;
    }

    const eventData = {
      ...newEvent // Assuming deviceId needs to be an integer
    };

    DeviceService.addLifecycleEventToDevice(deviceId, eventData)

      .then(response => {
        setEvents([...events, response]);
        setNewEvent(initialEventState);
        alert('Event added successfully');
      })
      .catch(error => {
        console.error('Error adding event:', error);
        alert('Failed to add event');
      });
  };

  return (
    <div className="container">
      <h2>Lifecycle Event Management</h2>
      <div className="card card-container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="eventType" className="form-label">Event Type:</label>
            <input type="text" className="form-control" id="eventType" name="eventType" value={newEvent.eventType} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="eventDate" className="form-label">Event Date:</label>
            <input type="date" className="form-control" id="eventDate" name="eventDate" value={newEvent.eventDate} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description:</label>
            <textarea className="form-control" id="description" name="description" value={newEvent.description} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category:</label>
            <input type="text" className="form-control" id="category" name="category" value={newEvent.category} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="deviceId" className="form-label">Device ID:</label>
            <input type="text" className="form-control" id="deviceId" name="deviceId" value={deviceId} onChange={(e) => setDeviceId(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">Add Event</button>
        </form>
      </div>
    </div>
  );
};

export default LifecycleEventManagementPage;
