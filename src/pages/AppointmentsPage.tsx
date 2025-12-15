import { useState, useEffect } from 'react';
import { appointmentService, type Appointment } from '../services/appointmentService';
import { Section } from '../components/ui/Section';

export const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    setAppointments(appointmentService.getAll());
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-neutral-dark">My Appointments</h1>
          
          {appointments.length === 0 ? (
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <p className="text-gray-500">No appointments found.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {appointments.map((app) => (
                <div key={app.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <h3 className="font-bold text-lg text-neutral-dark">
                        {app.service}
                       </h3>
                       <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                         app.status === 'completed' ? 'bg-green-100 text-green-700' :
                         app.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                         'bg-yellow-100 text-yellow-700'
                       }`}>
                         {app.status.toUpperCase()}
                       </span>
                    </div>
                    <p className="text-gray-600">
                      {new Date(app.date).toLocaleDateString()} at {app.time}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {app.firstName} {app.lastName} • {app.phone}
                    </p>
                  </div>
                  <div className="text-sm text-gray-400">
                    Booked on {new Date(app.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};
