import { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import style from "./FAQs.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function FAQs({ faqBunion }) {
  const richTextOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields;
        const mimeType = file.contentType;
        const mimeGroup = mimeType.split("/")[0];

        switch (mimeGroup) {
          case "image":
            return (
              <div className={style.imageContainer}>
                <img
                  title={title ? title : null}
                  className={style.image}
                  alt={description ? description : null}
                  src={file.url}
                />
              </div>
            );
          default:
            return (
              <span style={{ backgroundColor: "blue", color: "white" }}>
                {" "}
                {mimeType} embedded asset{" "}
              </span>
            );
        }
      },
    },
  };
  return (
    <div>
      {faqBunion
        ?.sort((a, b) => a.fields.position - b.fields.position)
        .map((entry) => {
          return (
            <div key={entry.sys.id} className={style.FAQContainer}>
              <Accordion className={style.question}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  // aria-controls="panel1a-content"
                >
                  <h3>{entry.fields.question}</h3>
                </AccordionSummary>
                <AccordionDetails className={style.answer}>
                  {documentToReactComponents(
                    entry.fields.answer,
                    richTextOptions
                  )}
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
    </div>
  );
}
