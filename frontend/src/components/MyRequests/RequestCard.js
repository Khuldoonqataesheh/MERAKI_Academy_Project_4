import React, { useState } from "react";
import "./MyRequest.css";
import axios from "axios";
import Button from '@material-ui/core/Button';


const RequestCard = ({
  hospital,
  date,
  bloodType,
  reqId,
  setHideCandidates,
  setConCandidates,
}) => {
  const deleteRequest = () => {
    axios
      .delete("http://localhost:5000/request/delete", {
        data: { reqId: reqId },
      })
      .then((result) => {
        console.log(reqId);
      })
      .catch((err) => {
        throw err;
      });
  };

  const getConCandidates = () => {
    axios
      .post("http://localhost:5000/candidates/getrequestcandidates", {
        reqId: reqId,
      })
      .then((result) => {
        console.log(result.data);
        setConCandidates(result.data);
        setHideCandidates(false);
        //console.log(conCandidates);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    
     
       <div id = "RequestCard">
          <h3 id="blood">{bloodType}</h3>
          <h3 id="hosp">{hospital}</h3>
          <h3 id="mydate">{date}</h3>
          <button variant="contained" color="red"
            onClick={() => {
              getConCandidates();
            }}
            id="candidates"
          >
            candidates
          </button>
          <button   onClick={deleteRequest} id="delete">
            delete
          </button>
          </div>
      
  );
};

export default RequestCard;
