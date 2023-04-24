export const dynamic = "force-dynamic";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainComponent from "@/app/components/MainComponent";
import { configureStore } from "@reduxjs/toolkit";
import { api, useGetDashboardDataQuery } from "./state/api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { Provider } from "react-redux";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import Loading from "./loading";
import ErrorState from "./error";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch);
export default function Home() {
  return (
    // <QueryClientProvider client={queryClient}>
    //   <MainComponent />
    // </QueryClientProvider>
    <Provider store={store}>
      <ClientOnly>
        <Container>
          <div
            className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
          >
            I am good
          </div>
        </Container>
      </ClientOnly>
    </Provider>
  );
}

const Home = async () => {
  const { data, isLoading, isError } = useGetDashboardDataQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorState />;
  }
};
