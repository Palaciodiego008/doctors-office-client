<template>
    <div>
      <h2>Crear Nuevo Paciente</h2>
      <form @submit.prevent="createPatient">
        <input type="text" v-model="name" placeholder="Nombre">
        <input type="text" v-model="doctorId" placeholder="ID del Doctor">
        <button type="submit">Crear Paciente</button>
      </form>
    </div>
  </template>
  
  <script>
  import ApiService from '@/services/ApiService';
  
  export default {
    data() {
      return {
        name: '',
        doctorId: ''
      };
    },
    methods: {
      async createPatient() {
        try {
          await ApiService.createPatient({ name: this.name, doctor_id: this.doctorId });
          this.name = '';
          this.doctorId = '';
          alert('Paciente creado exitosamente');
        } catch (error) {
          console.error('Error al crear paciente:', error);
          alert('Error al crear paciente');
        }
      }
    }
  }
  </script>
  