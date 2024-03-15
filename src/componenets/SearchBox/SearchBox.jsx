import css from './SearchBox.module.css';

export default function SearchBox({ value, onSearch }) {
  return (
    <div className={css.searchbox}>
      <p>Find contact by my name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={event => onSearch(event.target.value)}
      />
    </div>
  );
}
