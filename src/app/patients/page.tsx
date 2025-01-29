import React from 'react';
import Link from 'next/link';

const patients = [
  { id: 1, name: 'John Doe', age: 30, assignedDoctor: 'Dr. Smith' },
  { id: 2, name: 'Jane Doe', age: 25, assignedDoctor: 'Dr. Johnson' },
  { id: 3, name: 'Alice Smith', age: 40, assignedDoctor: 'Dr. Brown' },
];

const PatientListing = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Patient Listing</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id} className="mb-2">
            <Link href={`/patients/${patient.id}`}>
              <span className="font-semibold">{patient.name}</span> - Age: {patient.age}, Doctor: {patient.assignedDoctor}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientListing;