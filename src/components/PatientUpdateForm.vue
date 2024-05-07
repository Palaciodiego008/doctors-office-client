<template>
    <form @submit.prevent="updatePatient">
      <input type="text" v-model="name" placeholder="Nombre">
      <input type="text" v-model="doctorId" placeholder="ID del Doctor">
      <button type="submit">Actualizar Paciente</button>
    </form>
  </template>
  
  <script>
  export default {
    props: ['patient'],
    data() {
      return {
        name: this.patient.name,
        doctorId: this.patient.doctor_id
      };
    },
    methods: {
      updatePatient() {
        this.$emit('update-patient', { id: this.patient.id, name: this.name, doctor_id: this.doctorId });
      }
    }
  }
  </script>
  