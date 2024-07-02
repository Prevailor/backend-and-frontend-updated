// import React, { useState } from 'react';
// import DeviceService from '../services/DeviceService';

// const UpdateDevice = ({ device, setResponseMessage, setError }) => {
//   const [updatedDevice, setUpdatedDevice] = useState(device);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     // Handle nested fields using dot notation
//     if (name.includes('.')) {
//       const [fieldName, subFieldName] = name.split('.');
//       setUpdatedDevice({
//         ...updatedDevice,
//         [fieldName]: {
//           ...updatedDevice[fieldName],
//           [subFieldName]: value
//         }
//       });
//     } else {
//       setUpdatedDevice({ ...updatedDevice, [name]: value });
//     }
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await DeviceService.updateDevice(updatedDevice.deviceId, updatedDevice);
//       setResponseMessage('Device updated successfully.');
//     } catch (error) {
//       console.error('Error updating device:', error);
//       setError('Error updating device.');
//     }
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <div className="form-group">
//         <label htmlFor="deviceId">Device ID:</label>
//         <input
//           type="number"
//           id="deviceId"
//           name="deviceId"
//           value={updatedDevice.deviceId}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="deviceName">Device Name:</label>
//         <input
//           type="text"
//           id="deviceName"
//           name="deviceName"
//           value={updatedDevice.deviceName}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="deviceType">Device Type:</label>
//         <input
//           type="text"
//           id="deviceType"
//           name="deviceType"
//           value={updatedDevice.deviceType}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="purchaseDate">Purchase Date:</label>
//         <input
//           type="date"
//           id="purchaseDate"
//           name="purchaseDate"
//           value={updatedDevice.purchaseDate}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="endOfLife">End of Life:</label>
//         <input
//           type="date"
//           id="endOfLife"
//           name="endOfLife"
//           value={updatedDevice.endOfLife}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="endOfSupportDate">End of Support Date:</label>
//         <input
//           type="date"
//           id="endOfSupportDate"
//           name="endOfSupportDate"
//           value={updatedDevice.endOfSupportDate}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="status">Status:</label>
//         <input
//           type="text"
//           id="status"
//           name="status"
//           value={updatedDevice.status}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="dateOfLastReplacement">Date of Last Replacement:</label>
//         <input
//           type="date"
//           id="dateOfLastReplacement"
//           name="dateOfLastReplacement"
//           value={updatedDevice.dateOfLastReplacement}
//           onChange={handleInputChange}
//           className="form-control"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="userUserId">User ID:</label>
//         <input
//           type="number"
//           id="userUserId"
//           name="user.userId"
//           value={updatedDevice.user.userId}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="softwareList0SoftwareId">Software ID:</label>
//         <input
//           type="number"
//           id="softwareList0SoftwareId"
//           name="softwareList[0].softwareId"
//           value={updatedDevice.softwareList[0].softwareId}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="softwareList0SoftwareName">Software Name:</label>
//         <input
//           type="text"
//           id="softwareList0SoftwareName"
//           name="softwareList[0].softwareName"
//           value={updatedDevice.softwareList[0].softwareName}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="softwareList0Version">Software Version:</label>
//         <input
//           type="text"
//           id="softwareList0Version"
//           name="softwareList[0].version"
//           value={updatedDevice.softwareList[0].version}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="softwareList0LicenseKey">License Key:</label>
//         <input
//           type="text"
//           id="softwareList0LicenseKey"
//           name="softwareList[0].licenseKey"
//           value={updatedDevice.softwareList[0].licenseKey}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="softwareList0PurchaseDate">Software Purchase Date:</label>
//         <input
//           type="date"
//           id="softwareList0PurchaseDate"
//           name="softwareList[0].purchaseDate"
//           value={updatedDevice.softwareList[0].purchaseDate}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="softwareList0ExpirationDate">Software Expiration Date:</label>
//         <input
//           type="date"
//           id="softwareList0ExpirationDate"
//           name="softwareList[0].expirationDate"
//           value={updatedDevice.softwareList[0].expirationDate}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="softwareList0SupportEndDate">Software Support End Date:</label>
//         <input
//           type="date"
//           id="softwareList0SupportEndDate"
//           name="softwareList[0].supportEndDate"
//           value={updatedDevice.softwareList[0].supportEndDate}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="softwareList0Status">Software Status:</label>
//         <input
//           type="text"
//           id="softwareList0Status"
//           name="softwareList[0].status"
//           value={updatedDevice.softwareList[0].status}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="softwareList0DateOfLastRenewal">Software Last Renewal Date:</label>
//         <input
//           type="date"
//           id="softwareList0DateOfLastRenewal"
//           name="softwareList[0].dateOfLastRenewal"
//           value={updatedDevice.softwareList[0].dateOfLastRenewal}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="lifecycleEventEventId">Lifecycle Event ID:</label>
//         <input
//           type="number"
//           id="lifecycleEventEventId"
//           name="lifecycleEvent.eventId"
//           value={updatedDevice.lifecycleEvent.eventId}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="lifecycleEventEventType">Lifecycle Event Type:</label>
//         <input
//           type="text"
//           id="lifecycleEventEventType"
//           name="lifecycleEvent.eventType"
//           value={updatedDevice.lifecycleEvent.eventType}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="lifecycleEventEventDate">Lifecycle Event Date:</label>
//         <input
//           type="date"
//           id="lifecycleEventEventDate"
//           name="lifecycleEvent.eventDate"
//           value={updatedDevice.lifecycleEvent.eventDate}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="lifecycleEventDescription">Lifecycle Event Description:</label>
//         <input
//           type="text"
//           id="lifecycleEventDescription"
//           name="lifecycleEvent.description"
//           value={updatedDevice.lifecycleEvent.description}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="lifecycleEventCategory">Lifecycle Event Category:</label>
//         <input
//           type="text"
//           id="lifecycleEventCategory"
//           name="lifecycleEvent.category"
//           value={updatedDevice.lifecycleEvent.category}
//           onChange={handleInputChange}
//           className="form-control"
//           required
//         />
//       </div>
//       {/* Add more input fields as needed */}
//       <button type="submit" className="btn btn-primary">
//         Update Device
//       </button>
//     </form>
//   );
// };

// export default UpdateDevice;



import React, { useState, useEffect } from 'react';
import DeviceService from '../services/DeviceService';

const UpdateDevice = ({ device, setResponseMessage, setError }) => {
  const [updatedDevice, setUpdatedDevice] = useState({
    deviceId: device.deviceId,
    deviceName: device.deviceName,
    deviceType: device.deviceType,
    purchaseDate: device.purchaseDate,
    endOfLife: device.endOfLife,
    endOfSupportDate: device.endOfSupportDate,
    status: device.status,
    dateOfLastReplacement: device.dateOfLastReplacement,
    user: {
      userId: device.user.userId
    },
    softwareList: [
      {
        softwareId: device.softwareList[0].softwareId,
        softwareName: device.softwareList[0].softwareName,
        version: device.softwareList[0].version,
        licenseKey: device.softwareList[0].licenseKey,
        purchaseDate: device.softwareList[0].purchaseDate,
        expirationDate: device.softwareList[0].expirationDate,
        supportEndDate: device.softwareList[0].supportEndDate,
        status: device.softwareList[0].status,
        dateOfLastRenewal: device.softwareList[0].dateOfLastRenewal
      }
    ],
    lifecycleEvent: {
      eventId: device.lifecycleEvent.eventId,
      eventType: device.lifecycleEvent.eventType,
      eventDate: device.lifecycleEvent.eventDate,
      description: device.lifecycleEvent.description,
      category: device.lifecycleEvent.category
    }
  });

  // Update state when props change
  useEffect(() => {
    setUpdatedDevice({
      deviceId: device.deviceId,
      deviceName: device.deviceName,
      deviceType: device.deviceType,
      purchaseDate: device.purchaseDate,
      endOfLife: device.endOfLife,
      endOfSupportDate: device.endOfSupportDate,
      status: device.status,
      dateOfLastReplacement: device.dateOfLastReplacement,
      user: {
        userId: device.user.userId
      },
      softwareList: [
        {
          softwareId: device.softwareList[0].softwareId,
          softwareName: device.softwareList[0].softwareName,
          version: device.softwareList[0].version,
          licenseKey: device.softwareList[0].licenseKey,
          purchaseDate: device.softwareList[0].purchaseDate,
          expirationDate: device.softwareList[0].expirationDate,
          supportEndDate: device.softwareList[0].supportEndDate,
          status: device.softwareList[0].status,
          dateOfLastRenewal: device.softwareList[0].dateOfLastRenewal
        }
      ],
      lifecycleEvent: {
        eventId: device.lifecycleEvent.eventId,
        eventType: device.lifecycleEvent.eventType,
        eventDate: device.lifecycleEvent.eventDate,
        description: device.lifecycleEvent.description,
        category: device.lifecycleEvent.category
      }
    });
  }, [device]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Handle nested fields using dot notation
    if (name.includes('.')) {
      const [fieldName, subFieldName] = name.split('.');
      setUpdatedDevice(prevState => ({
        ...prevState,
        [fieldName]: {
          ...prevState[fieldName],
          [subFieldName]: value
        }
      }));
    } else {
      setUpdatedDevice({ ...updatedDevice, [name]: value });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await DeviceService.updateDevice(updatedDevice.deviceId, updatedDevice);
      setResponseMessage('Device updated successfully.');
    } catch (error) {
      console.error('Error updating device:', error);
      setError('Error updating device.');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="deviceId">Device ID:</label>
        <input
          type="number"
          id="deviceId"
          name="deviceId"
          value={updatedDevice.deviceId}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="deviceName">Device Name:</label>
        <input
          type="text"
          id="deviceName"
          name="deviceName"
          value={updatedDevice.deviceName}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="deviceType">Device Type:</label>
        <input
          type="text"
          id="deviceType"
          name="deviceType"
          value={updatedDevice.deviceType}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="purchaseDate">Purchase Date:</label>
        <input
          type="date"
          id="purchaseDate"
          name="purchaseDate"
          value={updatedDevice.purchaseDate}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="endOfLife">End of Life:</label>
        <input
          type="date"
          id="endOfLife"
          name="endOfLife"
          value={updatedDevice.endOfLife}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="endOfSupportDate">End of Support Date:</label>
        <input
          type="date"
          id="endOfSupportDate"
          name="endOfSupportDate"
          value={updatedDevice.endOfSupportDate}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <input
          type="text"
          id="status"
          name="status"
          value={updatedDevice.status}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="dateOfLastReplacement">Date of Last Replacement:</label>
        <input
          type="date"
          id="dateOfLastReplacement"
          name="dateOfLastReplacement"
          value={updatedDevice.dateOfLastReplacement}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="userUserId">User ID:</label>
        <input
          type="number"
          id="userUserId"
          name="user.userId"
          value={updatedDevice.user.userId}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="softwareList0SoftwareId">Software ID:</label>
        <input
          type="number"
          id="softwareList0SoftwareId"
          name="softwareList[0].softwareId"
          value={updatedDevice.softwareList[0].softwareId}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="softwareList0SoftwareName">Software Name:</label>
        <input
          type="text"
          id="softwareList0SoftwareName"
          name="softwareList[0].softwareName"
          value={updatedDevice.softwareList[0].softwareName}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="softwareList0Version">Software Version:</label>
        <input
          type="text"
          id="softwareList0Version"
          name="softwareList[0].version"
          value={updatedDevice.softwareList[0].version}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="softwareList0LicenseKey">License Key:</label>
        <input
          type="text"
          id="softwareList0LicenseKey"
          name="softwareList[0].licenseKey"
          value={updatedDevice.softwareList[0].licenseKey}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="softwareList0PurchaseDate">Software Purchase Date:</label>
        <input
          type="date"
          id="softwareList0PurchaseDate"
          name="softwareList[0].purchaseDate"
          value={updatedDevice.softwareList[0].purchaseDate}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="softwareList0ExpirationDate">Software Expiration Date:</label>
        <input
          type="date"
          id="softwareList0ExpirationDate"
          name="softwareList[0].expirationDate"
          value={updatedDevice.softwareList[0].expirationDate}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="softwareList0SupportEndDate">Software Support End Date:</label>
        <input
          type="date"
          id="softwareList0SupportEndDate"
          name="softwareList[0].supportEndDate"
          value={updatedDevice.softwareList[0].supportEndDate}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="softwareList0Status">Software Status:</label>
        <input
          type="text"
          id="softwareList0Status"
          name="softwareList[0].status"
          value={updatedDevice.softwareList[0].status}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="softwareList0DateOfLastRenewal">Software Last Renewal Date:</label>
        <input
          type="date"
          id="softwareList0DateOfLastRenewal"
          name="softwareList[0].dateOfLastRenewal"
          value={updatedDevice.softwareList[0].dateOfLastRenewal}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lifecycleEventEventId">Lifecycle Event ID:</label>
        <input
          type="number"
          id="lifecycleEventEventId"
          name="lifecycleEvent.eventId"
          value={updatedDevice.lifecycleEvent.eventId}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lifecycleEventEventType">Lifecycle Event Type:</label>
        <input
          type="text"
          id="lifecycleEventEventType"
          name="lifecycleEvent.eventType"
          value={updatedDevice.lifecycleEvent.eventType}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lifecycleEventEventDate">Lifecycle Event Date:</label>
        <input
          type="date"
          id="lifecycleEventEventDate"
          name="lifecycleEvent.eventDate"
          value={updatedDevice.lifecycleEvent.eventDate}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lifecycleEventDescription">Lifecycle Event Description:</label>
        <input
          type="text"
          id="lifecycleEventDescription"
          name="lifecycleEvent.description"
          value={updatedDevice.lifecycleEvent.description}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lifecycleEventCategory">Lifecycle Event Category:</label>
        <input
          type="text"
          id="lifecycleEventCategory"
          name="lifecycleEvent.category"
          value={updatedDevice.lifecycleEvent.category}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      {/* Add more input fields as needed */}
      <button type="submit" className="btn btn-primary">
        Update Device
      </button>
    </form>
  );
};

export default UpdateDevice;
