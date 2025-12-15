export interface Appointment {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:00
  service: string;
  message: string;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: number;
}

const STORAGE_KEY = 'eye_clinic_appointments';

export const appointmentService = {
  getAll: (): Appointment[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  add: (appointment: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => {
    const appointments = appointmentService.getAll();
    
    // Check for double booking
    const isTaken = appointments.some(
      (app) => 
        app.date === appointment.date && 
        app.time === appointment.time && 
        app.status !== 'cancelled'
    );

    if (isTaken) {
      throw new Error('This time slot is already booked. Please choose another time.');
    }

    const newAppointment: Appointment = {
      ...appointment,
      id: crypto.randomUUID(),
      status: 'pending',
      createdAt: Date.now(),
    };

    appointments.push(newAppointment);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
    return newAppointment;
  },

  updateStatus: (id: string, status: Appointment['status']) => {
    const appointments = appointmentService.getAll();
    const index = appointments.findIndex((app) => app.id === id);
    
    if (index !== -1) {
      appointments[index].status = status;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
      return appointments[index];
    }
    return null;
  }
};
