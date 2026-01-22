import './search-box.styles.css';

// interface ISeachBoxProps extends IChangeHandlerProps {
//   className: string;
//   placeholder?: string; // string | null
// }

interface ISeachBoxProps {
  className: string;
  placeholder?: string; // string | null
}


interface ISeachBoxProps {
  onChangeHandler: (a: string) => void
}

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (a: string) => void
}

type CanadianAddress = {
  street: string;
  province: string;
}

type USAddress = {
  street: string;
  state: string;
}

type ItalianAddress = {
  street: string;
  region: string;
}

type NorthAmericanAddress = CanadianAddress | USAddress | ItalianAddress;

const Address: NorthAmericanAddress = {
  street: 'abds',
  region: 'ldsjf'
}


const name: string = '1233455667'

const func: (a: string, b: string, c: string) => void = (a,b,c) => {}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={(e) => onChangeHandler(e)}
  />
);

export default SearchBox;

// const SearchBox = ({ className, placeholder, onChangeHandler }: ISeachBoxProps) => (
//   <input
//     className={`search-box ${className}`}
//     type='search'
//     placeholder={placeholder}
//     onChange={(e) => onChangeHandler(e)}
//   />
// );