import { useState } from "react";
import {
  differenceInDays,
  format,
  differenceInHours,
  differenceInSeconds,
} from "date-fns";
import { useEffect } from "react";

import Container from "../../components/Container/Container";
import Layout from "../../components/Layout";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import styles from "./Countdown.module.css";

const DATE_FORMAT = "do MMMM yyyy";
const START_DATE = new Date(2022, 8, 3);
const END_DATE = new Date(2023, 8, 3);
const START_TO_END_DAYS = Math.abs(differenceInDays(START_DATE, END_DATE));

const Countdown = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
  }, []);

  const startToNowDays = Math.abs(differenceInDays(START_DATE, currentDate));
  const nowToEndHours = Math.abs(differenceInHours(currentDate, END_DATE));
  const nowToEndSeconds = Math.abs(differenceInSeconds(currentDate, END_DATE));

  const percentageComplete = (startToNowDays / START_TO_END_DAYS) * 100;

  const stats = [
    {
      amount: START_TO_END_DAYS - startToNowDays,
      text: "days left",
    },
    {
      amount: nowToEndHours,
      text: "hours left",
    },
    {
      amount: nowToEndSeconds,
      text: "seconds left",
    },
  ];

  return (
    <Layout>
      <Container>
        <h1 className={styles.title}>Countdown</h1>

        <ProgressBar percentage={percentageComplete.toFixed(0)} />

        <div className={styles.row}>
          <div>
            <p>{format(START_DATE, DATE_FORMAT)}</p>
          </div>
          <div className="--text-align-right">
            <p>{format(END_DATE, DATE_FORMAT)}</p>
          </div>
        </div>

        {stats.map((stat) => (
          <p className={styles.stat}>
            <span>{stat.amount}</span> {stat.text}
          </p>
        ))}
      </Container>
    </Layout>
  );
};

export default Countdown;
