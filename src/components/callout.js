import React, { Component } from 'react';

class CalloutSection extends Component {
  render(){
    return(

  <section className="callout">

    <div className="container text-center">
    <div className={this.props.className}>
      <h2 className="mx-auto mb-5">
        Welcome to <em>my</em> website!
      </h2>
      </div>
    </div>
  </section>



    )
  }
}
export default CalloutSection;
