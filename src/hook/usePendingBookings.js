import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePendingBookings = () => {
  const { user } = useContext(AuthContext);
  const { data: pendingData = [], refetch } = useQuery({
    queryKey: ["pendingBooking", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BACK_END_API}/pending-service?email=${
          user?.email
        }`
      );
      return res.data;
    },
  });
  return [pendingData, refetch];
};

export default usePendingBookings;
