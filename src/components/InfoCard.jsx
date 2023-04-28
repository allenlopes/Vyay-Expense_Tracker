import React from 'react'

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: 'center', padding: '0 10%' }}>
        Try Saying: <br />
        Add { isIncome ? 'Income ' : 'Expense '}
        for <span>&#8377;</span>100
        in category { isIncome ? 'Business ' : 'Bills '}
        for { isIncome ? 'Monday ' : 'Tuesday '}
    </div>
  )
}

export default InfoCard