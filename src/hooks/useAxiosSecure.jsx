import axios from "axios";

const axiosSecure=axios.create({
   baseURL:"https://adopt-fluffy-friend-server.vercel.app"
})
const useAxiosSecure = () => {
   return axiosSecure;
};

export default useAxiosSecure;