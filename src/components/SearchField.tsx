import ReactSelect from "react-select";

import styles from "./SearchField.module.scss";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  onSelect: (cardId: string) => void;
}

const SearchField = ({ options, onSelect }: Props) => {
  return (
    <div className={styles.searchField}>
      <ReactSelect
        options={options}
        className="react-select"
        onChange={(e) => e && onSelect(e.value)}
      />
    </div>
  );
};

export default SearchField;
