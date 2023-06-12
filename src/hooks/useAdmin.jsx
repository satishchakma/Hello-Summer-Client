import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureAxios from "./useSecureAxios";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useSecureAxios();
  // use axios secure with react query
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      // console.log(res.data);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
