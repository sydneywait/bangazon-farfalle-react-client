const remoteURL = "https://localhost:5001/api/trainingprogram";
export default {

  getAll: () => {
    return fetch(`${remoteURL}`)
    .then(programs =>
      programs.json()
    )
  },

  getSingle: id =>{
    return fetch(`${remoteURL}/${id}`)
    .then(program => program.json())
    },

    postProgram: newProgram => {
    return fetch(`${remoteURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
                

        
      },
      body: JSON.stringify(newProgram)
    }).then(data => data.json());
  },

  putProgram: editedProgram => {
    return fetch(`${remoteURL}/${editedProgram.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
        
      },
      body: JSON.stringify(editedProgram)
    }).then(data => data.json());
  }

    
//   deleteprogram: id => {
//     return fetch(`${remoteURL}/${id}`, {
//       method: "DELETE"
//     })
//       .then(() => fetch(`${remoteURL}`))
//       .then(e => e.json());
//   }

}
