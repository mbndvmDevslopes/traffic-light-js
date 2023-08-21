import { Component } from 'react';

export class ClassTrafficLight extends Component {
  state = {
    color: 0,
  };

  changeColor = () => {
    if (this.state.color < 2) {
      this.setState({ color: this.state.color + 1 });
    } else {
      this.setState({ color: 0 });
    }
  };
  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div
            className={this.state.color === 0 ? `circle red` : 'circle black'}
          ></div>

          <div
            className={
              this.state.color === 2 ? `circle yellow` : 'circle black'
            }
          ></div>
          <div
            className={this.state.color === 1 ? 'circle green' : 'circle black'}
          ></div>
        </div>
        <button className="next-state-button" onClick={this.changeColor}>
          Next State
        </button>
      </div>
    );
  }
}
