
import React, { Component } from 'react';
import './App.css'
import axios from 'axios'

class App extends Component {

  state = {
    weatherPlace: "",
    Name: "",
    weatherimage: "",
    country: "",
    temperature: "",
    condition: "",
    lastUpdated: "",
    humidity: ""
  }


  componentWillUpdate = async () => {

    try {

      const response = await axios.get("http://api.weatherapi.com/v1/current.json?key=fedff82e0c21450c801111020210708&q=" + this.state.weatherPlace + "&aqi=no")


      this.setState({
        Name: response.data.current.condition.text,
        weatherimage: response.data.current.condition.icon,
        country: response.data.location.country,
        temperature: response.data.current.temp_c,
        condition: response.data.current.condition.text,
        lastUpdated: response.data.current.last_updated,
        humidity: response.data.current.humidity


      })


    } catch (error) {
      console.log("hata");

    }


  }



  render() {

    return (
      <div>


<a href="https://github.com/burakc3tin/react-weatherapp.git" style={{color:'#F16521',fontWeight:'bold'}}  >Go to github page</a>

        <div className="form-group col-centered ">
          <header>
            <h1><span class="icon"><i>[</i><b>!</b><i>]</i></span> <span class="text"><b>Weather</b><i>Forecast</i></span></h1>
          </header>

          <input class="col-centered form-control form-control-lg w-75" type="text" placeholder="Enter a place name
" onChange={(e) => {
              this.setState({ weatherPlace: e.target.value })
            }} />
        </div>

{this.state.weatherPlace===""?null:  <div class="container-fluid">

 
<div class="row">
  <div class="col-md-4">
    <div class="card text-white bg-primary mb-3">
      <div class="card-body">
        <h5 class="card-title">Last Updated</h5>

        <h5 class="card-title">{this.state.lastUpdated} <br /> </h5>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card text-white bg-success mb-3">
      <div class="card-body">
        <h5 class="card-title"> {this.state.temperature} °C</h5>

        <h5 class="card-title"> <br /></h5>

      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card text-white bg-secondary mb-3">
      <div class="card-body">
        <h5 class="card-title">{this.state.country} </h5>

        <h5 class="card-title">  <br />

        </h5>
      </div>
    </div>
  </div>

</div>
<div class="row">
  <div class="col-md-4">
    <div class="card text-white bg-danger mb-3">
      <div class="card-body">
        <img src={this.state.weatherimage}
        />
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card text-white bg-warning mb-3">
      <div class="card-body">
        <h5 class="card-title">{this.state.condition} </h5>
        <h5 class="card-title">  <br /> </h5>

      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card text-white bg-info mb-3">
      <div class="card-body">
        <h5 class="card-title">Humidity</h5>

        <h5 class="card-title">{this.state.humidity}%</h5>
      </div>
    </div>
  </div>
</div>
<div class="row">


</div>
</div>}
       



        <div className="bird-container bird-container-one">
          <div className="bird bird-one"></div>
        </div>
        <div className="bird-container bird-container-two">
          <div className="bird bird-two"></div>
        </div>
        <div className="bird-container bird-container-three">
          <div className="bird bird-three"></div>
        </div>
        <div className="bird-container bird-container-four">
          <div className="bird bird-four"></div>
        </div>





      </div>
    );
  }
}

export default App;