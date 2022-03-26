import { react } from 'react';
import Patient from "./Patient"
// validar si no hay pacientes que cambie el texto para empezar a agregar
const PatientsList = ({patients, setPatient, deletePatient}) => {
  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patients List</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Manage your {""}
            <span className="text-indigo-600 font-bold">
              Patients and Appointments
            </span>
          </p>

          {patients.map(patient => (
            <Patient 
              key={patient.id} 
              patient={patient} 
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
          <>
            <h2 className="font-black text-3xl text-center">The List is Empty</h2>
            <p className="text-lg mt-5 text-center mb-10">
              Start adding your first patient! {""}
              <span className="text-indigo-600 font-bold">
                LET'S DO IT 😁
              </span>
            </p>
          </>
        )}
    </div>
  );
};

export default PatientsList;
