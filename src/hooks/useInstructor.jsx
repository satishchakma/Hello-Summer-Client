import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureAxios from "./useSecureAxios";

const useInstructor = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useSecureAxios();
  // use axios secure with react query
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructors/${user?.email}`);
      return res.data.admin;
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
