import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

export default {
  async getDoctors() {
    const response = await axios.get(`${API_URL}/doctors`);
    return response.data;
  },
  async getPatients() {
    const response = await axios.get(`${API_URL}/patients`);
    return response.data;
  },
  async createPatient(patientData) {
    const response = await axios.post(`${API_URL}/create_patient`, patientData);
    return response.data;
  },
  async updateDoctor(doctorId, doctorData) {
    const response = await axios.put(`${API_URL}/update_doctor/${doctorId}`, doctorData);
    return response.data;
  },
  async updatePatient(patientId, patientData) {
    const response = await axios.put(`${API_URL}/update_patient/${patientId}`, patientData);
    return response.data;
  },

  async deleteAppointment(appointmentId) {
    const response = await axios.delete(`${API_URL}/delete_appointment/${appointmentId}`);
    return response.data;
  }
  
};
