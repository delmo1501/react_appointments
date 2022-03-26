const Patient = ({ patient, setPatient, deletePatient }) => {
  // si no queres pasar cada dato con patient.name, o patient.client. Aplicas desatructuring
  const { name, client, email, date, symptoms, id } = patient;

  const handleDelete = () => {
    const response = confirm('Delete this patient?');
    if(response) {
      deletePatient(id)
    }
  }
  //NO LLAMAR en el onCLick con (), porque ejecutaria inmediatamente y no esperaria el onClick

  return (
    <div className="mx-5 bg-white my-10 shadow-md px-5  py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: {""}
        <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Client: {""}
        <span className="font-normal normal-case">{client}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Date: {""}
        <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms: {""}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPatient(patient)}
        >
          Edit
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patient;
