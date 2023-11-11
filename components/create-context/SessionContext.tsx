import { createContext, useContext, ReactNode, useState } from 'react';

interface SessionContextProps {
    activeSession: boolean | null;
    setActiveSession: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const SessionContext = createContext<SessionContextProps | undefined>(undefined);

export const SessionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [activeSession, setActiveSession] = useState<boolean | null>(null);

    return (
        <SessionContext.Provider value={{ activeSession, setActiveSession }}>
            {children}
        </SessionContext.Provider>
    );
};

export const useSession = (): SessionContextProps => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error('useSession debe ser utilizado dentro de un SessionProvider');
    }
    return context;
};
