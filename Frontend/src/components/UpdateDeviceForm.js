// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import DeviceService from '../services/DeviceService';

// function UpdateDevice() {
//   const navigate = useNavigate();
//   const { deviceId } = useParams();

//   const [deviceData, setDeviceData] = useState({
//     deviceName: '',
//     deviceType: '',
//     purchaseDate: '',
//     expirationDate: '',
//     endOfSupportDate: '',
//     status: ''
//   });

//   useEffect(() => {
//     fetchDeviceDataById(deviceId);
//   }, [deviceId]);

//   const fetchDeviceDataById = async (deviceId) => {
//     try {
//       //const token = localStorage.getItem('token'); // Retrieve the token from localStorage
//       const response = await DeviceService.getDeviceById(deviceId);
//       console.log(response);
//       if (response) {
//         setDeviceData(response);
//       } else {
//         console.error('Error: Device data is undefined.');
//       }
//     } catch (error) {
//       console.error('Error fetching device data:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setDeviceData((prevDeviceData) => ({
//       ...prevDeviceData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await DeviceService.updateDevice(deviceData);
//       console.log(res);
//       navigate("/admin/device-management");
//     } catch (error) {
//       console.error('Error updating device:', error);
//       alert(error.message || 'An error occurred while updating device.');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Update Device</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Device Name:</label>
//           <input type="text" name="deviceName" value={deviceData.deviceName || ''} onChange={handleInputChange} />
//         </div>
//         <div className="form-group">
//           <label>Device Type:</label>
//           <input type="text" name="deviceType" value={deviceData.deviceType || ''} onChange={handleInputChange} />
//         </div>
//         <div className="form-group">
//           <label>Purchase Date:</label>
//           <input type="date" name="purchaseDate" value={deviceData.purchaseDate || ''} onChange={handleInputChange} />
//         </div>
//         <div className="form-group">
//           <label>Expiration Date:</label>
//           <input type="date" name="expirationDate" value={deviceData.expirationDate || ''} onChange={handleInputChange} />
//         </div>
//         <div className="form-group">
//           <label>End of Support Date:</label>
//           <input type="date" name="endOfSupportDate" value={deviceData.endOfSupportDate || ''} onChange={handleInputChange} />
//         </div>
//         <div className="form-group">
//           <label>Status:</label>
//           <input type="text" name="status" value={deviceData.status || ''} onChange={handleInputChange} />
//         </div>
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// }

// export default UpdateDevice;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import DeviceService from '../services/DeviceService';
// import 'C:\\Users\\praveenkumar.sg\\Documents\\react-hooks-jwt-auth\\src\\UpdateDevice.css'; // Import your CSS file for component-specific styles

// function UpdateDevice() {
//   const navigate = useNavigate();
//   const { deviceId } = useParams();

//   const [deviceData, setDeviceData] = useState({
//     deviceName: '',
//     deviceType: '',
//     purchaseDate: '',
//     expirationDate: '',
//     endOfSupportDate: '',
//     status: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchDeviceDataById(deviceId);
//   }, [deviceId]);

//   const fetchDeviceDataById = async (deviceId) => {
//     try {
//       const response = await DeviceService.getDeviceById(deviceId);
//       if (response) {
//         setDeviceData(response);
//       } else {
//         setError('Device data not found.');
//       }
//     } catch (error) {
//       setError('Error fetching device data.');
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setDeviceData((prevDeviceData) => ({
//       ...prevDeviceData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await DeviceService.updateDevice(deviceData);
//       alert('Device updated successfully');
//       navigate("/admin/device-management");
//     } catch (error) {
//       setError(error.message || 'An error occurred while updating device.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="update-device-container">
//       <h2 className="page-title">Update Device</h2>
//       {error && <div className="error-message">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Device Name:</label>
//           <input type="text" name="deviceName" value={deviceData.deviceName || ''} onChange={handleInputChange} />
//         </div>
//         <div className="form-group">
//           <label>Device Type:</label>
//           <input type="text" name="deviceType" value={deviceData.deviceType || ''} onChange={handleInputChange} />
//         </div>
//         <div className="form-group">
//           <label>Purchase Date:</label>
//           <input type="date" name="purchaseDate" value={deviceData.purchaseDate || ''} onChange={handleInputChange} />
//         </div>
//         <div className="form-group">
//           <label>Expiration Date:</label>
//           <input type="date" name="expirationDate" value={deviceData.expirationDate || ''} onChange={handleInputChange} />
//         </div>
//         <div className="form-group">
//           <label>End of Support Date:</label>
//           <input type="date" name="endOfSupportDate" value={deviceData.endOfSupportDate || ''} onChange={handleInputChange} />
//         </div>
//         <div className="form-group">
//           <label>Status:</label>
//           <input type="text" name="status" value={deviceData.status || ''} onChange={handleInputChange} />
//         </div>
//         <button type="submit" className="btn-update-update" disabled={loading}>{loading ? 'Updating...' : 'Update'}</button>
//       </form>
//     </div>
//   );
// }

// export default UpdateDevice;


// import React, { useState, useEffect } from 'react';
// import DeviceService from '../services/DeviceService';
// const UpdateDeviceForm = () => {
//   const [deviceId, setDeviceId] = useState('');
//   const [device, setDevice] = useState(null);
//   const [error, setError] = useState(null);
//   const [responseMessage, setResponseMessage] = useState('');

//   useEffect(() => {
//     fetchDeviceData();
//   }, []);

//   const fetchDeviceData = async () => {
//     try {
//       const response = await DeviceService.getDeviceById(deviceId); 
//       if (response.data) {
//         setDevice(response.data);
//       } else {
//         setDevice(null);
//         setError('Device not found.');
//       }
//     } catch (error) {
//       console.error('Error fetching device:', error);
//       setError('Failed to fetch device.');
//     }
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await DeviceService.updateDevice(device);
//       setResponseMessage('Device updated successfully.');
//     } catch (error) {
//       console.error('Error updating device:', error);
//       setError('Error updating device.');
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setDevice({ ...device, [name]: value });
//   };

//   if (!device) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="container mt-4">
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <div className="card p-4 rounded">
//             <h2 className="mb-4">Update Device</h2>
//             <form onSubmit={handleFormSubmit}>
//               <div className="form-group">
//                 <label htmlFor="deviceId">Device ID:</label>
//                 <input
//                   type="text"
//                   id="deviceId"
//                   name="deviceId"
//                   value={device.deviceId}
//                   onChange={handleInputChange}
//                   className="form-control"
//                   readOnly
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="deviceName">Device Name:</label>
//                 <input
//                   type="text"
//                   id="deviceName"
//                   name="deviceName"
//                   value={device.deviceName}
//                   onChange={handleInputChange}
//                   className="form-control"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="deviceType">Device Type:</label>
//                 <input
//                   type="text"
//                   id="deviceType"
//                   name="deviceType"
//                   value={device.deviceType}
//                   onChange={handleInputChange}
//                   className="form-control"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="purchaseDate">Purchase Date:</label>
//                 <input
//                   type="date"
//                   id="purchaseDate"
//                   name="purchaseDate"
//                   value={device.purchaseDate}
//                   onChange={handleInputChange}
//                   className="form-control"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="endOfLife">End of Life:</label>
//                 <input
//                   type="date"
//                   id="endOfLife"
//                   name="endOfLife"
//                   value={device.endOfLife}
//                   onChange={handleInputChange}
//                   className="form-control"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="endOfSupportDate">End of Support Date:</label>
//                 <input
//                   type="date"
//                   id="endOfSupportDate"
//                   name="endOfSupportDate"
//                   value={device.endOfSupportDate}
//                   onChange={handleInputChange}
//                   className="form-control"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="status">Status:</label>
//                 <select
//                   id="status"
//                   name="status"
//                   value={device.status}
//                   onChange={handleInputChange}
//                   className="form-control"
//                   required
//                 >
//                   <option value="">Select Status</option>
//                   <option value="Active">Active</option>
//                   <option value="Inactive">Inactive</option>
//                   {/* Add other status options as needed */}
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="dateOfLastReplacement">Date of Last Replacement:</label>
//                 <input
//                   type="date"
//                   id="dateOfLastReplacement"
//                   name="dateOfLastReplacement"
//                   value={device.dateOfLastReplacement}
//                   onChange={handleInputChange}
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="user">Assigned User:</label>
//                 <input
//                   type="text"
//                   id="user"
//                   name="user"
//                   value={device.user ? device.user.userName : ''}
//                   onChange={handleInputChange}
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="lifecycleEvent">Lifecycle Event:</label>
//                 <input
//                   type="text"
//                   id="lifecycleEvent"
//                   name="lifecycleEvent"
//                   value={device.lifecycleEvent ? device.lifecycleEvent.eventType : ''}
//                   onChange={handleInputChange}
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="softwareList">Software List:</label>
//                 <select
//                   id="softwareList"
//                   name="softwareList"
//                   multiple
//                   value={device.softwareList.map(software => software.softwareId)}
//                   onChange={handleInputChange}
//                   className="form-control"
//                 >
//                   {/* Render options based on available softwareList */}
//                   {device.softwareList.map(software => (
//                     <option key={software.softwareId} value={software.softwareId}>
//                       {software.softwareName}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               {/* Add more fields here as per DeviceDTO */}
//               <button type="submit" className="btn btn-primary">
//                 Update Device
//               </button>
//             </form>
//             {error && <p className="mt-4 text-danger">{error}</p>}
//             {responseMessage && <p className="mt-4">{responseMessage}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateDeviceForm;


import React, { useState, useEffect } from 'react';
import DeviceService from '../services/DeviceService';
import UpdateDevice from './UpdateDevice';

const UpdateDeviceForm = () => {
  const [deviceId, setDeviceId] = useState('');
  const [device, setDevice] = useState(null); // Initially no device
  const [error, setError] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission

  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        const fetchedDevice = await DeviceService.getDeviceById(deviceId);
        setDevice(fetchedDevice);
      } catch (error) {
        console.error('Error fetching device:', error);
        setError('Failed to fetch device.');
      }
    };

    if (formSubmitted && deviceId) {
      fetchDeviceData();
    }
  }, [formSubmitted, deviceId]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setFormSubmitted(true); // Trigger fetching device data
    } catch (error) {
      console.error('Error updating device:', error);
      setError('Error updating device.');
    }
  };

  const handleDeviceIdChange = (e) => {
    setDeviceId(e.target.value);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 rounded">
            <h2 className="mb-4">Update Device</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="deviceId">Enter Device ID:</label>
                <input
                  type="text"
                  id="deviceId"
                  name="deviceId"
                  value={deviceId}
                  onChange={handleDeviceIdChange}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mb-3">
                Fetch Device Details
              </button>
              {error && <p className="text-danger">{error}</p>}
              {responseMessage && <p className="mt-4">{responseMessage}</p>}
            </form>
            {formSubmitted && device && (
              <UpdateDevice
                device={device}
                setResponseMessage={setResponseMessage}
                setError={setError}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateDeviceForm;
