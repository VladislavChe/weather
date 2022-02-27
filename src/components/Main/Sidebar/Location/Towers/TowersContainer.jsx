import React from 'react';
import { connect } from 'react-redux';
import { API } from '../../../../../API/api';
import { choosedTower } from '../../../../../redux/main-branch-reducer';
import Towers from './Towers';

class TowersContainer extends React.Component {
  componentDidMount() {}

  clickTower = (tower) => {
    API.getCityName(tower).then((data) => {
      let lat = data[0].lat;
      let lon = data[0].lon;

      API.getCurrentCity(lat, lon).then((data) => {
        let city = data.name;
        let degrees = Math.round(data.main.temp - 273.15);
        let humidity = data.main.humidity;
        let wind = Math.round(data.wind.speed);

        let card = {
          city: city,
          degrees: degrees,
          street: 'Broken Cluds',
          humidity: humidity,
          wind: wind,
        };
        this.props.choosedTower(card);
      });
    });
  };

  render() {
    return <Towers clickTower={this.clickTower} cards={this.props.mainBranch.cards} />;
  }
}

let mapStateToProps = (state) => {
  return {
    mainBranch: state.mainBranch,
  };
};

export default connect(mapStateToProps, { choosedTower })(TowersContainer);
