import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        return <div key={projects.title} className="columns portfolio-item">
          <div style={{ width: 200, height: 200, border: "2px solid black", background: "grey", borderRadius: 8 }} className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <div style={{ width: 200, height: 200 }} className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
            <div className="portfolio-item-meta">
              <h5>{projects.title}</h5>
              <p>{projects.category}</p>
            </div>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
