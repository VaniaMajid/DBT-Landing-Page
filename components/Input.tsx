import React from 'react';

type InputProps = {
  type: string;
  id: string;
  name: string; 
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const Input = ({ type, id, name, label, placeholder, value, onChange, error }: InputProps) => {
  return (
    <div className='space-y-2'>
      <label htmlFor={id} className={`text-sm font-medium leading-none ${error ? 'text-red-500' : 'text-black'} peer-disabled:cursor-not-allowed`}>
        {label}
      </label>
      <input
        className={`flex h-14 w-full text-primary-50 rounded-sm border bg-primary-70 px-3 py-2 text-sm focus-visible:border-primary-50 ring-offset-primary-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-50 focus-visible:outline-none focus-visible:ring-offset-0 ${error ? 'border-red-500' : ''}`}
        placeholder={placeholder}
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && (
        <p className='text-red-500 text-sm font-medium'>{error}</p>
      )}
    </div>
  );
};

export default Input;
