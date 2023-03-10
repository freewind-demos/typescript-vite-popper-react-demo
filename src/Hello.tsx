import React, { FC, useState } from 'react';
import { usePopper } from 'react-popper';
import './index.css';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  return (
    <>
      <div id="popcorn" ref={setReferenceElement} />

      <div id="tooltip" ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        Popper element
        <div id="arrow" ref={setArrowElement} style={styles.arrow} />
      </div>
    </>
  );
}
