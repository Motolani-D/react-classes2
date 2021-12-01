import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      intervalId: 0,
      person: {
        fullname: "Motolani",
        bio: "I am a lover of nature and everything beautiful. I enjoy trying new things and I have a thing for technology",
        profession: "Fintech Product Manager",
        image:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcourtevillegroup.com%2Fwp-content%2Fuploads%2F2019%2F06%2Fgoogle.png&imgrefurl=https%3A%2F%2Fcourtevillegroup.com%2Fwith-google-search-engine-people-can-easily-get-information-to-make-life-easier-expert%2F&tbnid=C2v5frVt68mtsM&vet=12ahUKEwjJk9fm5cH0AhXB3YUKHepYC0QQMygtegUIARCnAg..i&docid=ZtxU0OhpzUYWIM&w=1005&h=485&itg=1&q=google&ved=2ahUKEwjJk9fm5cH0AhXB3YUKHepYC0QQMygtegUIARCnAg",
        show: true,
      },
    };
  }

  handleClick = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState((prevState) => {
        return {
          ...prevState,
          intervalId: 0,
        };
      });
      return;
    }

    const newIntervalId = setInterval(() => {
      this.setState((prevState) => {
        return {
          ...prevState,
          count: prevState.count + 1,
        };
      });
    }, 1000);

    this.setState((prevState) => {
      return {
        ...prevState,
        intervalId: newIntervalId,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <section className="App-section">
          <div>
            {this.state.show ? (
              <div>
                <h1>{this.state.person.fullname}</h1>
                <p>{this.state.person.bio}</p>
                <h3>{this.state.person.profession}</h3>
                <img src={this.state.person.image} alt="" />
              </div>
            ) : null}
            <button
              style={{
                background: "6f30c3",
                borderRadius: "10px",
                padding: "12px",
                ButtonShadow: "3px",
                color: "#d1b112",
              }}
              onClick={() => {
                this.setState({ show: !this.state.show });
                this.handleClick();
              }}
            >
              {this.state.show ? "Hide Details" : "Show Details"}
            </button>
          </div>

          <h5>This page has been rendered for {this.state.count} seconds</h5>
          {/* <button
            style={{
              background: "6f30c3",
              borderRadius: "7px",
              padding: "8px",
              ButtonShadow: "3px",
              color: "#d1b112",
            }}
            onClick={this.handleClick}
          >
            {this.state.intervalId ? "Stop counter" : "Start counter"}
          </button> */}
        </section>
      </div>
    );
  }
}

export default App;
