<template>
    <form @submit.prevent="updateDoctor">
      <input type="text" v-model="name" placeholder="Nombre">
      <input type="text" v-model="specialty" placeholder="Especialidad">
      <button type="submit">Actualizar Doctor</button>
    </form>
  </template>
  
  <script>
  export default {
    props: ['doctor'],
    data() {
      return {
        name: this.doctor.name,
        specialty: this.doctor.specialty
      };
    },
    methods: {
      updateDoctor() {
        this.$emit('update-doctor', { id: this.doctor.id, name: this.name, specialty: this.specialty });
      }
    }
  }
  </script>
  