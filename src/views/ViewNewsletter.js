import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
const onClickDay = (date) => {
    // setMonth(date.getMonth() + 1);
    // setDay(date.getDate());
    // setyear(date.getFullYear());
    getAllData().then((res) => {
      setSave(res[1]);
      setExpense(res[2]);
    });
    const getSaveDates = save.map((newsletters) => {
      const d = newsletters.date;
      const saveConverted = DateTime.fromISO(d).toLocaleString();
      return { ...newsletters, date: saveConverted };
    });
    const getExpenseDate = expense.map((newsletters) => {
      const d = newsletters.date;
      const expenseConverted = DateTime.fromISO(d).toLocaleString();
      return { ...newsletters, date: expenseConverted };
    });
    setData([getExpenseDate, getSaveDates]);
  };
  console.log(data);
