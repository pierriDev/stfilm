import Navigation from "./navigation/Nav"
import { queryClient } from "./api/queryClient"
import { QueryClientProvider } from "react-query";
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}

export default App;
