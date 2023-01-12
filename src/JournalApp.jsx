import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const JournalApp = () => {
  console.log("renderizo");
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
