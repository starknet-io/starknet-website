import React, { createContext, useState, ReactNode } from 'react';

interface Alert {
  title: string;
  hasCloseButton: boolean;
  id: string;
  variant: 'important' | 'info' | 'warning';
  children: ReactNode;
}

interface AlertContextData {
  globalAlert: Alert | null;
  pageAlert: Alert | null;
  setGlobalAlert: (alert: Alert | null) => void;
  setPageAlert: (alert: Alert | null) => void;
}

const AlertContext = createContext<AlertContextData>({
  globalAlert: null,
  pageAlert: null,
  setGlobalAlert: () => {},
  setPageAlert: () => {},
});

interface AlertProviderProps {
  children: ReactNode;
}

const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [globalAlert, setGlobalAlert] = useState<Alert | null>(null);
  const [pageAlert, setPageAlert] = useState<Alert | null>(null);

  // Fetch globalAlert and pageAlert from your data source, e.g., GraphQL
  // and set the values for globalAlert and pageAlert

  return (
    <AlertContext.Provider
      value={{
        globalAlert,
        pageAlert,
        setGlobalAlert,
        setPageAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export { AlertContext, AlertProvider };