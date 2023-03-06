import style from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ id, title, stats }) => {
  const allLabels = stats.map(item => {
    return (
      <li key={item.id} className={style.item}>
        <p className={style.label}>{item.label}</p>
        <span className={style.percentage}>{item.percentage}%</span>
      </li>
    );
  });

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>{allLabels}</ul>
    </div>
  );
};

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  percentage: PropTypes.number.isRequired,
};
