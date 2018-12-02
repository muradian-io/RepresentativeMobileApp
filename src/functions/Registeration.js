import axios from 'axios'

export function Registeration(NewPharmacy) {
    axios.post('', {
        Pharmacy:NewPharmacy
      })
      .then(function (response) {
        alert(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      return alert("Successfuly registered")
}
