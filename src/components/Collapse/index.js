import React from "react";

import { Item } from "./styles";

import Logo from "../../assets/logo/logo_horizontal.png";

export default function Collapse ({faq, index, toggle}) {
  return (
    <Item 
      key={index} 
      className={faq.open && 'open'}
      onClick={() => toggle(index)}
    >
      <div className="faq-question">
        {faq.question}
      </div>
      <div className="faq-answer">
        {faq.answer}
      </div>
    </Item>
  );
};