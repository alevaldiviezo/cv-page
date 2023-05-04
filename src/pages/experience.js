import React from "react";

const Experience = () => {
    return(
        <div>
            <h1>Experience</h1>
            <div className="overflow-auto">
              <table className="f6 w-100 mw8 center" cellspacing="0">
                <thead>
                  <tr className="stripe-dark">
                    <th className="fw6 tl pa3 bg-white">Year</th>
                    <th className="fw6 tl pa3 bg-white">Company</th>
                    <th className="fw6 tl pa3 bg-white">Position</th>
                    <th className="fw6 tl pa3 bg-white">Functions</th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  <tr className="stripe-dark">
                    <td className="pa3">2023</td>
                    <td className="pa3">Orcawise</td>
                    <td className="pa3">React Developer</td>
                    <td className="pa3">Part of the development team to maintain, add features and changes to Orcawise website and manage interaction and integration with other apps.</td>
                  </tr>
                  <tr className="stripe-dark">
                    <td className="pa3">2022</td>
                    <td className="pa3">Appen</td>
                    <td className="pa3">Data Collector</td>
                    <td className="pa3">Review web sites information, search engine accuracy, image match, text and hours accuracy. Review content in web sites related to query text, response accuracy and sensitive content.</td>
                  </tr>
                  <tr className="stripe-dark">
                    <td className="pa3">2021-2022</td>
                    <td className="pa3">Appen</td>
                    <td className="pa3">Mistery Shopper</td>
                    <td className="pa3">Evaluate and review the online process of buying articles through different platforms.
                               	Complete the process of purchasing and reimbursement.
                               	Complete feedback surveys.</td>
                  </tr>
                  <tr className="stripe-dark">
                    <td className="pa3">2016-2018</td>
                    <td className="pa3">MV laundry services</td>
                    <td className="pa3">General Manager</td>
                    <td className="pa3">Start up the company, buying of equipment and furniture
			Hire staff, license, accounting, services.
			Operate and supervise the activities.
			Subsidy the first operational months.</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
            <h3>Other Experience</h3>
            <div className="overflow-auto">
              <table className="f6 w-100 mw8 center" cellspacing="0">
                <thead>
                  <tr className="stripe-dark">
                    <th className="fw6 tl pa3 bg-white">Year</th>
                    <th className="fw6 tl pa3 bg-white">Company</th>
                    <th className="fw6 tl pa3 bg-white">Position</th>
                    <th className="fw6 tl pa3 bg-white">Functions</th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  <tr className="stripe-dark">
                    <td className="pa3">2016-2017</td>
                    <td className="pa3">Independent Consultor</td>
                    <td className="pa3">Health, Safety and Environment Consultor</td>
                    <td className="pa3">Help to companies to manage environmental legislation
			Asses local business for reaching all the HSE legal requirements to operate.
			Generate documents and present to the local authority.
			General consulting in HSE issues. </td>
                  </tr>
                  <tr className="stripe-dark">
                    <td className="pa3">2006-2016</td>
                    <td className="pa3">YPFB Logistica S.A.</td>
                    <td className="pa3">HSE Supervisor, Plant Supervisor, Pump Station Operator</td>
                    <td className="pa3">Supervise and manage Health, Safety and Environment activities.
			Support in projects and activities related to the area.
			Supervision of Loading and store operations.
			Operate and coordinate pump stations in transport operations</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>

        </div>
    )
}

export default Experience;