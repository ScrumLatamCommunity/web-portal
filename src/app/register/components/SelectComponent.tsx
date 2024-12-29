'use client'
import { useId, useMemo } from 'react'
import Select, { SingleValue } from 'react-select'
import countryList from 'react-select-country-list'

export default function SelectComponent({
  selectedCountry,
  setSelectedCountry,
}: {
  selectedCountry: string
  setSelectedCountry: (value: string) => void
}) {
  const id = useId()
  const options = useMemo(() => countryList().getData(), [])

  const handleCountryChange = (
    selectedOption: SingleValue<{ label: string; value: string }>,
  ) => {
    setSelectedCountry(selectedOption?.label || '')
  }

  return (
    <Select
      classNamePrefix='react-select'
      instanceId={id}
      options={options}
      styles={{
        container: (provided) => ({
          ...provided,
          width: '100%',
        }),
        control: (provided) => ({
          ...provided,
          border: 'none',
          borderBottom: '2px solid #FD3600',
          boxShadow: 'none',
          borderRadius: '0',
          padding: '16px 0 16px 15px',
          backgroundColor: 'transparent',
          '&:hover': {
            borderBottom: '2px solid #FD3600',
          },
        }),
        dropdownIndicator: () => ({
          display: 'none',
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        valueContainer: (provided) => ({
          ...provided,
          padding: '0',
        }),
      }}
      onChange={handleCountryChange}
      placeholder='País'
      value={options.find((option) => option.label === selectedCountry)}
    />
  )
}
