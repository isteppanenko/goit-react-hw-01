import transactions from '../../assets/transactionsHistory.json';
import css from './/TransactionHistory.module.css';
const TransactionHistory = () => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.head}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ type, amount, currency, id }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
