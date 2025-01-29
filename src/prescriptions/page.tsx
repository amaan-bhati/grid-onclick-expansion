import React from 'react';
import PrescriptionForm from '../app/components/PrescriptionForm';

const PrescriptionsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Manage Prescriptions</h1>
      <PrescriptionForm />
    </div>
  );
};

export default PrescriptionsPage;