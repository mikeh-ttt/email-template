'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface FormData {
  name: string;
  'job-position': string;
  'linked-url': string;
  'linked-display-name': string;
  phone: string;
}

interface FormDataContextType {
  formData: FormData;
  updateFormData: (key: keyof FormData, value: string) => void;
}

const FormDataContext = createContext<FormDataContextType | undefined>(
  undefined
);

export const FormDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const updateFormData = (key: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = (): FormDataContextType => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};
