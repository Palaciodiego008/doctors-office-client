<template>
    <div>
      <h2>Lista de Doctores</h2>
      <ul>
        <li v-for="doctor in doctors" :key="doctor.id">
          <h3>{{ doctor.name }}</h3>
          <p>Especialidad: {{ doctor.specialty }}</p>
          <button @click="updateDoctor(doctor.id)">Actualizar</button>
          <button @click="deleteDoctor(doctor.id)">Eliminar</button>
          <p>Pacientes:</p>
          <ul>
            <li v-for="patient in doctor.patients" :key="patient.id">
              {{ patient.name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['doctors'],
    methods: {
      updateDoctor(doctorId) {
        this.$emit('update-doctor', doctorId);
      },
      deleteDoctor(doctorId) {
        this.$emit('delete-doctor', doctorId);
      }
    }
  }
  </script>
  