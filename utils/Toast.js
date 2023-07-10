import Swal from "sweetalert2";
import "./Toast.scss";

const Toast = Swal.mixin({
   toast: true,
   position: "bottom-end",
   showConfirmButton: false,
   timer: 2000,
   timerProgressBar: true,
   didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
   },
   customClass: {
      popup: "custom-toast",
   },
});

export default Toast;
