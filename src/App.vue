<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import ApiService from './services/ApiService';

export default {
  name: 'App',
  data() {
    return {
      doctors: [],
      patients: []
    };
  },
  async mounted() {
    try {
      this.loadDoctors();
      this.loadPatients();
    } catch (error) {
      console.error('Error al cargar datos:', error);
      alert('Error al cargar datos');
    }
  },
  methods: {
    async loadDoctors() {
      this.doctors = await ApiService.getDoctors();
    },
    async loadPatients() {
      this.patients = await ApiService.getPatients();
    },
    async updateDoctor(doctorId, doctorData) {
      try {
        await ApiService.updateDoctor(doctorId, doctorData);
        alert('Doctor actualizado exitosamente');
        this.loadDoctors(); // Actualizar la lista de doctores después de la actualización
      } catch (error) {
        console.error('Error al actualizar doctor:', error);
        alert('Error al actualizar doctor');
      }
    },
    async updatePatient(patientId, patientData) {
      try {
        await ApiService.updatePatient(patientId, patientData);
        alert('Paciente actualizado exitosamente');
        this.loadPatients(); // Actualizar la lista de pacientes después de la actualización
      } catch (error) {
        console.error('Error al actualizar paciente:', error);
        alert('Error al actualizar paciente');
      }
    },
    async deleteAppointment(appointmentId) {
      try {
        await ApiService.deleteAppointment(appointmentId);
        alert('Cita eliminada exitosamente');
        // Puedes decidir si recargar la lista de pacientes/doctores después de eliminar una cita
      } catch (error) {
        console.error('Error al eliminar cita:', error);
        alert('Error al eliminar cita');
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
