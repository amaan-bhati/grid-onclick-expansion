import React from 'react';

const Doctors = () => {
  const doctors = [
    { name: 'Dr. Smith', specialty: 'Cardiology' },
    { name: 'Dr. Johnson', specialty: 'Neurology' },
  ];

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Doctors</h1>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">{doctor.name}</span> - {doctor.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Doctors;