<template>
    <div>
      <h2>Lista de Pacientes</h2>
      <ul>
        <li v-for="patient in patients" :key="patient.id">
          {{ patient.name }} - Doctor: {{ patient.doctor_id }}
          <button @click="updatePatient(patient.id)">Actualizar</button>
          <button @click="deletePatient(patient.id)">Eliminar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['patients'],
    methods: {
      updatePatient(patientId) {
        this.$emit('update-patient', patientId);
      },
      deletePatient(patientId) {
        this.$emit('delete-patient', patientId);
      }
    }
  }
  </script>
  