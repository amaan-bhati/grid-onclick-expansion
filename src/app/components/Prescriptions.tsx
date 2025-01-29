import React from 'react';

const Prescriptions = () => {
  const prescriptions = [
    { medication: 'Aspirin', dosage: '100mg', frequency: 'Once a day' },
    { medication: 'Lisinopril', dosage: '10mg', frequency: 'Twice a day' },
  ];

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Prescriptions</h1>
      <ul>
        {prescriptions.map((prescription, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">{prescription.medication}</span> - {prescription.dosage} ({prescription.frequency})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prescriptions;