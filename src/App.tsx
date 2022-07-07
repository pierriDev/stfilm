import Navigation from "./navigation/Nav"
import { queryClient } from "./api/queryClient"
import { QueryClientProvider } from "react-query";
import context from "./context/AppContext";
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={context}>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
