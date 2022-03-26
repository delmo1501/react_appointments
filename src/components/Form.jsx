import { useState, useEffect } from 'react';
import Error from './Error'

const Form =({ patients, setPatients, patient, setPatient})=> {

  const [name, setName] = useState('');
  const [client, setClient] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false)
  // Object.key es la forma de saber si el arreglo tiene algo, si no no sirve imprimir
  useEffect(() => {
    if(Object.keys(patient).length >0) {
      setName(patient.name)
      setClient(patient.client)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptoms(patient.symptoms)
    } 
  }, [patient])


 // generar id random para pasar en una iteracion de map
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    
    return random + fecha

  }


  const handleSubmit= (e) => {
    e.preventDefault();
    //Validar formulario
    if( [ name, client, email, date, symptoms ].includes('') ) {
      console.log('One input missing')
      setError(true)
      return;
    } 
    setError(false)

    // tenemos que pasar muchos datos, ergo, el objeto paciente
    const objectPatient = {
      name, 
      client, 
      email, 
      date, 
      symptoms,
    }
    
    //aca vemos si el paciente tiene id es porque lo estamos editando, si no, creando
    if(patient.id) {
      console.log('Editando')// aca ya tenemos id, pero no en objetcPatient, por ende lo estariamos perdiendo
      objectPatient.id = patient.id
      //tendriamos patient y object patient, el primero es el anterior y el ultimo es el actualizado
      const patientNew = patients.map( patientState => patientState.id === patient.id ? objectPatient : patientState)
      // aca creamos un patient New para ver el que estamos editando, mapeamos para comparar los ID's, y vemos si tiene uno igual, lo reemplaza y si no usa el State, que es el nuevo,
      //retorno el que esta en el state
      // Creamos una variable temporal para comparar, que es patientState, si no no podriamos
      setPatients(patientNew) // ya actualizamos pero no se puede limpiar el paciente anterior, sigue en memoria
      setPatient({})

    }else {
      console.log('New record')
      objectPatient.id= generarId(); //como cortamos id del objetct patient, tenemos que crearle uno cuando lo creamos de 0, si no, no tendria
      setPatients([...patients, objectPatient]);
    }

    // setPatients([...patients, objectPatient]); //tomamos una copia del ya existente ...patients y le asignamos el nuevo objeto
    //reiniciar el form
    setName('')
    setClient('')
    setEmail('')
    setDate('')
    setSymptoms('')
  }

// error &&, si hacemos la ternaria mostraria el falso, osea el NO HAY ERROR, y eso no pasa nunca
// otro problema es que no regresa a false cuando envias el form

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Patients</h2>
      <p className="text-lg mt-5 text-center mb-10">Add patiens and {''}
      <span className="text-indigo-600 font-bold">Manage</span>
      </p>
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
        { error && <Error><p>You must fill all the fields</p></Error>}
        <div className="mb-5">
          <label htmlFor="name" className="block text-gray-700 uppercase font-bold">
            Name
          </label>
          <input 
            id="name"
            type="text"
            placeholder="Pet name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="client" className="block text-gray-700 uppercase font-bold">
            Client Name
          </label>
          <input 
            id="client"
            type="text"
            placeholder="Client name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={client}
            onChange={(e) => setClient(e.target.value) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input 
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="date" className="block text-gray-700 uppercase font-bold">
            Date
          </label>
          <input 
            id="date"
            type="date"
            placeholder="Date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="symptom" className="block text-gray-700 uppercase font-bold">
            Symptom
          </label>
          <textarea 
            id="Symptom"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe the symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value) }
          />
        </div>
        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={patient.id ? 'Edit Patient' : 'ADd Patient'}
        />
      </form>
    </div>
  )
}
//value del input nos muestra como ver si estamos editando paciente o creando nuevo. Pero cuand oeditamos tenemos que detectar si es un registro nuevo o una edicion  
export default Form