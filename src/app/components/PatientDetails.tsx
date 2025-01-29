import React from 'react';

const PatientDetails = () => {
  const patient = {
    name: 'John Doe',
    age: 30,
    assignedDoctor: 'Dr. Smith',
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Patient Details</h1>
      <div className="mb-2">
        <span className="font-semibold">Name:</span> {patient.name}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Age:</span> {patient.age}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Assigned Doctor:</span> {patient.assignedDoctor}
      </div>
    </div>
  );
};

export default PatientDetails;