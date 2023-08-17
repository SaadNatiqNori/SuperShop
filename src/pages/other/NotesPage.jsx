import React from "react";

export default function NotesPage() {
  return (
    <div>
      <h2>
        <b>Notes:</b>
      </h2>
      <div style={{ padding: "15px 35px" }}>
        <ol>
          <li>
            First of all ( all required tasks are completed ) for this project
            but:
          </li>
          <li>
            I made the sort by price in <i>Vanilla Js</i> because the <i>API</i>
            is not available on <a href="fakestoreapi.com">fakestoreapi</a>, you
            can review it to be sure.
          </li>
          <li>
            <i>Welcome Screen</i> showed only when the user visit the web
            application for the first time, to see it again remove the
            <i>Local Storage</i>, or open the web application in private window.
          </li>
          <li>
            i am using NodeJs Version <i>16.15.1</i>, if npm not installed try
            to change the NodeJs version.
          </li>
          <li>
            I am using <i>.env</i> Variables for some <i>API</i> purposes.
          </li>
          <li>
            To start the project run <i>npm run dev</i> after installing the{" "}
            <i>npm install</i>
          </li>
          <li>
            This project could certainly be improved if there was more time.
          </li>
          <li>
            & Thank You{" "}
            <b>
              <i>Gateway ICT</i>
            </b>{" "}
            for this chance
          </li>
        </ol>
      </div>
    </div>
  );
}
