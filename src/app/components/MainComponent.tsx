"use server";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";

interface MainComponentProps {}

const MainComponent: FC<MainComponentProps> = ({}) => {
  const baseURL = process.env.NEXT_APP_BASE_URL;
  const { data, error, refetch, isError, isLoading } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: async () => {
      const { data } = await axios.get(baseURL);
    },
  });

  console.log("data", data);
  return <div>MainComponent</div>;
};

export default MainComponent;
