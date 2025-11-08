import React, { useEffect, useState } from 'react';
import api from '../api/axiosInstance';
import TestCard from '../components/TestCard';

const Diagnostics = () => {
    const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchTests = async () => {
      try {
        // Replace '/tests' with your actual diagnostic tests endpoint
        const response = await api.get('/diagnosticTests'); 
        
        // --- MOCK DATA FALLBACK (if backend isn't ready) ---
        // In a real app, you'd only use response.data
        const mockData = [
          { id: 1, name: 'MRI Scan', price: 650.00, description: 'Magnetic Resonance Imaging.' },
          { id: 2, name: 'X-ray', price: 120.00, description: 'Basic radiographic imaging.' },
          { id: 3, name: 'ECG', price: 80.00, description: 'Electrocardiogram to check heart rhythm.' },
          { id: 4, name: 'Blood Panel', price: 150.00, description: 'Comprehensive blood laboratory analysis.' },
        ];
        
        setTests(response.data.length > 0 ? response.data : mockData); 
        // ---------------------------------------------------

      } catch (err) {
        console.error('Failed to fetch tests:', err);
        setError('Failed to load diagnostic test data. Using mock data for display.');
        // Display mock data on error for better user experience while developing
        setTests([
            { id: 1, name: 'MRI Scan', price: 650.00, description: 'Magnetic Resonance Imaging (Mock).' },
            { id: 2, name: 'X-ray', price: 120.00, description: 'Basic radiographic imaging (Mock).' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  if (loading) return <div className="text-center p-8 text-xl text-teal-600">Loading diagnostic tests...</div>;
    return (
       <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-teal-700 mb-10">Diagnostic Services 🔬</h1>
      
      {error && <p className="text-center p-4 bg-red-100 text-red-700 rounded mb-4">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tests.map(test => (
          <TestCard key={test.id} test={test} />
        ))}
      </div>
    </div>
    );
};

export default Diagnostics;