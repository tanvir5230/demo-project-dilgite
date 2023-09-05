import React from "react";
import "./index.css";
import Homepage from "./components/pages/Homepage/Homepage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Homepage />
    </QueryClientProvider>
  );
};

export default App;
