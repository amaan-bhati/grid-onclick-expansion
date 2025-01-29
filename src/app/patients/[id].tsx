import React from 'react';
import { useRouter } from 'next/router';

const patients = [
  { id: 1, name: 'John Doe', age: 30, assignedDoctor: 'Dr. Smith' },
  { id: 2, name: 'Jane Doe', age: 25, assignedDoctor: 'Dr. Johnson' },
  { id: 3, name: 'Alice Smith', age: 40, assignedDoctor: 'Dr. Brown' },
];

const PatientDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const patient = patients.find((p) => p.id === Number(id));

  if (!patient) {
    return <div>Patient not found</div>;
  }

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