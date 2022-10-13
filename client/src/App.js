import axios from 'axios';
import FormData from 'form-data';


function App() {
  const data = new FormData();
  var config = {
    method: 'get',
    url: 'https://api.crimeometer.com/v1/incidents/stats?lat=41.9777476245164&lon=-87.6472903440513&datetime_ini=2019-01-01 00:00:00&datetime_end=2019-12-31 00:00:00&distance=5mi&page=1',
    headers: { 
      'x-api-key': 'NYlLzorHFs601nUrbj7Jy1i4xSG1PHR5az8U07dx'
    },
    data : data
  };
  
  axios(config)
  .then((res) => {
    console.log(JSON.stringify(res.data));
  }).catch((err) => {
    console.log(err);
  });


  return (
    <div>

    </div>
  );
}

export default App;
