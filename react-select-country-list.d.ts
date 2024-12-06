declare module 'react-select-country-list' {
  const countryList: () => {
    getData: () => { label: string; value: string }[]
  }
  export default countryList
}
