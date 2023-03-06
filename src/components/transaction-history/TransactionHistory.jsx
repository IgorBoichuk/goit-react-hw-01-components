import style from './Transactions.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ id, type, amount, currency, items }) => {
  const renderedData = items.map(item => {
    return (
      <tr key={item.id} className={style.tbodylist}>
        <td className={style.tbodyitem}>{item.type}</td>
        <td className={style.tbodyitem}>{item.amount}</td>
        <td className={style.tbodyitem}>{item.currency}</td>
      </tr>
    );
  });

  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr className={style.theadrow}>
          <th className={style.title}>Type</th>
          <th className={style.title}>Amount</th>
          <th className={style.title}>Currency</th>
        </tr>
      </thead>
      <tbody className={style.tbody}>{renderedData}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
};
