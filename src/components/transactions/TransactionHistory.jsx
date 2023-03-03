import style from './Transactions.module.css';

export const TransactionHistory = ({ id, type, amount, currency, items }) => {
  const renderedData = items.map(item => {
    return (
      <tr key={item.id} className={style.transactionhistorytbodylist}>
        <td className={style.transactionhistorytbodyitem}>{item.type}</td>
        <td className={style.transactionhistorytbodyitem}>{item.amount}</td>
        <td className={style.transactionhistorytbodyitem}>{item.currency}</td>
      </tr>
    );
  });

  return (
    <table className={style.transactionhistorytable}>
      <thead className={style.transactionhistorythead}>
        <tr className={style.transactionhistorytheadrow}>
          <th className={style.transactionhistorytitle}>Type</th>
          <th className={style.transactionhistorytitle}>Amount</th>
          <th className={style.transactionhistorytitle}>Currency</th>
        </tr>
      </thead>
      <tbody className={style.transactionhistorytbody}>{renderedData}</tbody>
    </table>
  );
};
