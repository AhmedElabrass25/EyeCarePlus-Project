import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Phone, MessageCircle } from 'lucide-react';
import { appointmentService } from '../../services/appointmentService';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useUser, SignInButton } from "@clerk/clerk-react";

export const Appointment = () => {
  const { isSignedIn, user } = useUser();

  const availableHours = [
    "09:00", "10:00", "11:00", "12:00", 
    "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^[0-9+\-\s()]*$/, 'Invalid phone number format'),
    service: Yup.string().required('Please select a service'),
    date: Yup.date()
      .required('Date is required')
      .min(new Date(new Date().setHours(0,0,0,0)), 'Date cannot be in the past'),
    time: Yup.string().required('Please select a time'),
    message: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      phone: '',
      date: '',
      time: '',
      service: '',
      message: ''
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        appointmentService.add({
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          date: values.date,
          time: values.time,
          service: values.service,
          message: values.message
        });

        toast.success(
          <div>
            <p className="font-bold">Appointment Request Sent!</p>
            <p className="text-sm">We have received your request for {values.date} at {values.time}.</p>
          </div>,
          { duration: 5000 }
        );
        
        resetForm();
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Section id="book-appointment" className="bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 font-medium text-sm mb-6 border border-teal-500/30">
            Book Appointment
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Improve Your Vision?
          </h2>
          <p className="text-blue-100 mb-12 leading-relaxed text-lg">
            Schedule an intense eye exam or consultation with our experts. We are here to help you see the world more clearly.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg">Call Us Directly</p>
                <p className="text-blue-200">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg">Chat on WhatsApp</p>
                <p className="text-blue-200">Instant Response</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white text-neutral-dark p-8 rounded-3xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-6">Request Appointment</h3>
          
          {!isSignedIn ? (
            <div className="text-center py-12 space-y-4">
              <p className="text-gray-600 mb-4">Please sign in to book an appointment.</p>
              <SignInButton mode="modal">
                <Button size="lg" className="w-full">Sign In to Book</Button>
              </SignInButton>
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">First Name</label>
                <input 
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text" 
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 border outline-none transition-all ${
                    formik.touched.firstName && formik.errors.firstName ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent'
                  }`}
                  placeholder="John" 
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-red-500 text-xs">{formik.errors.firstName}</div>
                )}
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-medium text-gray-700">Last Name</label>
                 <input 
                   name="lastName"
                   value={formik.values.lastName}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   type="text" 
                   className={`w-full px-4 py-3 rounded-lg bg-gray-50 border outline-none transition-all ${
                    formik.touched.lastName && formik.errors.lastName ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent'
                  }`}
                   placeholder="Doe" 
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className="text-red-500 text-xs">{formik.errors.lastName}</div>
                  )}
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <input 
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="tel" 
                className={`w-full px-4 py-3 rounded-lg bg-gray-50 border outline-none transition-all ${
                  formik.touched.phone && formik.errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent'
                }`}
                placeholder="(555) 000-0000" 
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-500 text-xs">{formik.errors.phone}</div>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Service Required</label>
              <div className="relative">
                <select 
                  name="service"
                  value={formik.values.service}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 border outline-none transition-all appearance-none ${
                    formik.touched.service && formik.errors.service ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent'
                  }`}
                >
                  <option value="" disabled>Select a Service</option>
                  <option value="Comprehensive Eye Exam">Comprehensive Eye Exam</option>
                  <option value="Cataract Screening">Cataract Screening</option>
                  <option value="Contact Lens Fitting">Contact Lens Fitting</option>
                  <option value="LASIK Consultation">LASIK Consultation</option>
                  <option value="Pediatric Eye Care">Pediatric Eye Care</option>
                  <option value="Glaucoma Checkup">Glaucoma Checkup</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </div>
              </div>
              {formik.touched.service && formik.errors.service && (
                <div className="text-red-500 text-xs">{formik.errors.service}</div>
              )}
            </div>
            
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Preferred Date</label>
                  <div className="relative">
                    <input 
                      name="date"
                      value={formik.values.date}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="date" 
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 border outline-none transition-all ${
                        formik.touched.date && formik.errors.date ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent'
                      }`} 
                    />
                  </div>
                  {formik.touched.date && formik.errors.date && (
                    <div className="text-red-500 text-xs">{formik.errors.date}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Preferred Time</label>
                  <div className="relative">
                    <select
                      name="time"
                      value={formik.values.time}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 border outline-none transition-all appearance-none ${
                        formik.touched.time && formik.errors.time ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent'
                      }`}
                    >
                      <option value="" disabled>Select Time</option>
                      {availableHours.map(hour => (
                        <option key={hour} value={hour}>{hour}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    </div>
                  </div>
                  {formik.touched.time && formik.errors.time && (
                    <div className="text-red-500 text-xs">{formik.errors.time}</div>
                  )}
                </div>
              </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message (Optional)</label>
              <textarea 
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows={3} 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" 
                placeholder="Describe your symptoms or reason for visit..." 
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              isLoading={formik.isSubmitting}
            >
              Submit Request
            </Button>
          </form>
          )}
        </div>
      </div>
    </Section>
  );
};
