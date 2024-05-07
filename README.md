```markdown
# Doctor's Office Management System

This project is a web application for managing a doctor's office. It allows users to view and manage doctors, patients, and appointments in a hospital setting.

## Features

- View a list of doctors along with their specialties and associated patients.
- View a list of patients and their assigned doctors.
- Create new patients and assign them to doctors.
- Update information for doctors and patients.
- Delete appointments.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/doctor-office-management.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd doctor-office-management
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm run serve
    ```

5. **Visit http://localhost:8080 in your browser to view the application.**

## Technologies Used

- Vue.js: Frontend framework for building user interfaces.
- Vue Router: Official router for Vue.js, used for managing application routes.
- Vuex: State management pattern and library for Vue.js applications.
- Flask: Micro web framework for building the backend API.
- Flask SQLAlchemy: Toolkit for working with SQL databases in Flask applications.
- CORS: Flask extension for handling Cross-Origin Resource Sharing (CORS).

## API Endpoints

- **GET /doctors**: Retrieve a list of all doctors.
- **GET /patients**: Retrieve a list of all patients.
- **POST /create_patient**: Create a new patient and assign them to a doctor.
- **PUT /update_doctor/{doctor_id}**: Update information for a specific doctor.
- **PUT /update_patient/{patient_id}**: Update information for a specific patient.
- **DELETE /delete_appointment/{appointment_id}**: Delete an appointment.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```