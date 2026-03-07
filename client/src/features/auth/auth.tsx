import { useCurrentQuery } from "../../app/services/auth";
import type { ReactNode } from "react";

export const Auth = ({ children }: { children: ReactNode }) => {
  const { isLoading } = useCurrentQuery();

  if(isLoading) {
    return <span>Загрузка</span>
  }

  return children;
}