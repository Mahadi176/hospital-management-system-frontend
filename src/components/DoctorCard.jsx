import React from 'react';

const DoctorCard = ({doctor}) => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      <img
        className="w-full h-48 object-cover"
        src={doctor.image || 'https://via.placeholder.com/400x300?text=Doctor'}
        alt={`Dr. ${doctor.name}`}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-1">Dr. {doctor.name}</h3>
        <p className="text-sm font-medium text-gray-600 mb-3">{doctor.specialty}</p>
        <p className="text-gray-500 text-sm">{doctor.bio || 'Experienced professional dedicated to patient care.'}</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Book Appointment
        </button>
      </div>
    </div>
    );
};

export default DoctorCard;