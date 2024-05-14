import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";

export default function LandingAccordion(props) {
  return (
    <div>
      {props.items.map((item, index) => {
        return (
          <Accordion
            sx={{
              mb: 1,
              boxShadow: "0px 3px 7px 1px #d8d8d8",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
             <img alt="question-vector" src="/images/question-vector.svg" style={{marginLeft:'15px'}} /> {item.title}
            </AccordionSummary>
            <AccordionDetails>{item.details}</AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
