import { useState, useEffect  } from 'react'
import Form from "./components/Form"
import Header from "./components/Header"
import PatientsList from "./components/PatientsList"

// con mt-12 flex juntamos form y patientslist, para que queden de lado

function App() {

  const [patients, setPatients] = useState([]); // todos, por eso arreglo
  const [patient, setPatient] = useState({});  //uno solo por eso objeto


  //la idea es meter en localstorage todos lso strings (no podes guardar arreglos), con useEffect, cada vez que se actualice pacientes, convertimos con JSON.stringify, y guardamos

  useEffect(() => {
    const getLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? []; // si no hay nada, agrega un arreglo vacio
      setPatients(patientsLS) //al recargar detecta algo y lo pone, entonces a la sig al recargar si habra algo y no se dejara vacio
    }

    getLS();
  }, []); //lo cargamos primero porque queremos que se ejecute 1 SOLA VEZ, solo al montar, cuando el componente esta listo y ver si hay algo en localstorage

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]); //este solo, lo haria pero no guardaria cuando recargamos

  const deletePatient = (id) => {
    const patientsUpdateds= patients.filter( patient => patient.id !== id); // no eliminamos como tal, si no que traemos a todos los que son diferentes al que tenemos que eliiminar, 
    setPatients(patientsUpdateds) 
  }

  return (
    <div className="container mx-auto mt-20">
      <Header
      />

      <div className="mt-12 md:flex">
      <Form
        patients={patients}
        setPatients={setPatients}
        patient={patient}
        setPatient={setPatient}
      />
      <PatientsList
        patients={patients}
        setPatient={setPatient}
        deletePatient={deletePatient}
      />
      </div>

    </div>
  )
}

export default App
