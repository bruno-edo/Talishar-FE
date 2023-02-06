import { useFormikContext } from 'formik';
import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { DeckResponse } from 'interface/API/GetLobbyInfo.php';
import styles from './StickyFooter.module.css';
import classNames from 'classnames';

export type DeckSize = {
  deckSize: number;
  submitSideboard: boolean;
};

const StickyFooter = ({ deckSize, submitSideboard }: DeckSize) => {
  const { errors, values, isValid } = useFormikContext<DeckResponse>();
  let errorArray = [] as string[];
  for (const [key, value] of Object.entries(errors)) {
    errorArray.push(String(value));
  }

  const dynamicContainer = classNames(styles.dynamicContainer, 'container');

  return (
    <div className={styles.stickyFooter}>
      <div className={dynamicContainer}>
        <div className={styles.footerContent}>
          <div>
            Deck {values.deck.length}/{deckSize}
          </div>
          {!isValid && (
            <div className={styles.alarm}>
              <FaExclamationCircle /> {errorArray[0]}
            </div>
          )}
        </div>
        <div className={styles.buttonHolder}>
          <button
            className={styles.buttonClass}
            type="submit"
            disabled={!errors || !submitSideboard}
          >
            Submit deck
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
