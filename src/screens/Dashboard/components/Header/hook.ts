import * as T from "./types";

export const useDashboardHeader = ({ modalEmergencyInfoRef }: T.dashboardHeaderProps) => {
  const openModalEmergencyInfo = () => {
    modalEmergencyInfoRef.current?.open();
  };

  return {
    headerRefs: {
      modalEmergencyInfoRef,
    },
    headerActions: {
      openModalEmergencyInfo,
    },
  };
};
