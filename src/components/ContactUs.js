import React, { Component } from 'react';
export default class ContactUs extends Component {
  
  render() {
    let colorr = 'gray';
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me.
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4><span style={{color:"gray"}}>Linked in:&nbsp;&nbsp;</span> 
                  {resumeData.linkedinId}
                </h4>
                <h4><span style={{color:"gray"}}>Email:&nbsp;&nbsp;</span> 
                  saichandhan.yata44@gmail.com
                </h4>
                <h4><span style={{color:"gray"}}>Phone:&nbsp;&nbsp;</span> 
                  8501044098
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}