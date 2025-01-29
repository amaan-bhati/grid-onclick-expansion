'use client'
import React, { useState } from 'react';

const PrescriptionForm = () => {
  const [patient, setPatient] = useState('');
  const [doctor, setDoctor] = useState('');
  const [medicine, setMedicine] = useState('');
  const [validityStart, setValidityStart] = useState('');
  const [validityEnd, setValidityEnd] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const patients = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Alice Smith' },
  ];

  const doctors = [
    { id: 1, name: 'Dr. Smith' },
    { id: 2, name: 'Dr. Johnson' },
    { id: 3, name: 'Dr. Brown' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: any = {};

    if (!patient) newErrors.patient = 'Patient is required';
    if (!doctor) newErrors.doctor = 'Doctor is required';
    if (!medicine) newErrors.medicine = 'Medicine is required';
    if (!validityStart) newErrors.validityStart = 'Validity start date is required';
    if (!validityEnd) newErrors.validityEnd = 'Validity end date is required';
    if (new Date(validityStart) >= new Date(validityEnd)) {
      newErrors.validityEnd = 'Validity end date must be after the start date';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setProgress(0);

    // Simulate a prescription creation process
    for (let i = 0; i <= 100; i += 20) {
      setTimeout(() => {
        setProgress(i);
      }, i * 100);
    }

    // Simulate a delay for the prescription creation
    setTimeout(() => {
      console.log({ patient, doctor, medicine, validityStart, validityEnd });
      setLoading(false);
      setProgress(0);
      // Reset form
      setPatient('');
      setDoctor('');
      setMedicine('');
      setValidityStart('');
      setValidityEnd('');
      setErrors({});
    }, 600); // Adjust this time as needed
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Add New Prescription</h1>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="patient">Patient</label>
        <select
          id="patient"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
          className={`border rounded p-2 w-full text-black ${errors.patient ? 'border-red-500' : ''}`}
        >
          <option value="">Select a patient</option>
          {patients.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        {errors.patient && <p className="text-red-500">{errors.patient}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="doctor">Doctor</label>
        <select
          id="doctor"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          className={`border rounded p-2 w-full text-black ${errors.doctor ? 'border-red-500' : ''}`}
        >
          <option value="">Select a doctor</option>
          {doctors.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
        {errors.doctor && <p className="text-red-500">{errors.doctor}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="medicine">Medicine</label>
        <input
          type="text"
          id="medicine"
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
          className={`border rounded p-2 w-full text-black ${errors.medicine ? 'border-red-500' : ''}`}
        />
        {errors.medicine && <p className="text-red-500">{errors.medicine}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="validityStart">Validity Start Date</label>
        <input
          type="date"
          id="validityStart"
          value={validityStart}
          onChange={(e) => setValidityStart(e.target.value)}
          className={`border rounded p-2 w-full text-black ${errors.validityStart ? 'border-red-500' : ''}`}
        />
        {errors.validityStart && <p className="text-red-500">{errors.validityStart}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="validityEnd">Validity End Date</label>
        <input
          type="date"
          id="validityEnd"
          value={validityEnd}
          onChange={(e) => setValidityEnd(e.target.value)}
          className={`border rounded p-2 w-full text-black ${errors.validityEnd ? 'border-red-500' : ''}`}
        />
        {errors.validityEnd && <p className="text-red-500">{errors.validityEnd}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {loading ? 'Creating...' : 'Add Prescription'}
      </button>
      {loading && (
        <div className="mt-4">
          <div className="bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${progress}%`, transition: 'width 0.1s' }}
            />
          </div>
          <p className="text-center">{progress}%</p>
        </div>
      )}
    </form>
  );
};

export default PrescriptionForm;