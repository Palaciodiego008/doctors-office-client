import Vue from 'vue';
import App from './App.vue';
import DoctorList from './components/DoctorList.vue';
import PatientList from './components/PatientList.vue';
import CreatePatient from './components/CreatePatient.vue';

Vue.component('doctor-list', DoctorList);
Vue.component('patient-list', PatientList);
Vue.component('create-patient', CreatePatient);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
