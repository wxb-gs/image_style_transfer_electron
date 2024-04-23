import { AppProvider } from "@/context";
import type { ReactNode } from "react";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import LoadingPage from "./components/other/LoadingPage";
import "./index.css";
const App = lazy(() => import("./App"));

const AppWrapper = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<LoadingPage />}>{children}</Suspense>
);

const Main = () => {
  return (
    <React.StrictMode>
      <AppWrapper>
        <AppProvider>
          <App />
        </AppProvider>
      </AppWrapper>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
