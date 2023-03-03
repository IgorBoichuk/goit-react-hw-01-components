import style from './Transactions.module.css';

export const TransactionHistory = ({ id, type, amount, currency }) => {
  return (
    <table className={style.transactionhistorytable}>
      <thead className={style.transactionhistorythead}>
        <tr className={style.transactionhistorytheadrow}>
          <th className={style.transactionhistorytitle}>Type</th>
          <th className={style.transactionhistorytitle}>Amount</th>
          <th className={style.transactionhistorytitle}>Currency</th>
        </tr>
      </thead>

      <tbody className={style.transactionhistorytbody}>
        <tr className={style.transactionhistorytbodylist}>
          <td className={style.transactionhistorytbodyitem}>Invoice</td>
          <td className={style.transactionhistorytbodyitem}>125</td>
          <td className={style.transactionhistorytbodyitem}>USD</td>
        </tr>
        <tr className={style.transactionhistorytbodylist}>
          <td className={style.transactionhistorytbodyitem}>Withdrawal</td>
          <td className={style.transactionhistorytbodyitem}>85</td>
          <td className={style.transactionhistorytbodyitem}>USD</td>
        </tr>
      </tbody>
    </table>
  );
};
