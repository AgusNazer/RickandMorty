const validation = (userData, errors, setErrors) => {
     if (!userData.email) {
       setErrors((prevErrors) => ({
         ...prevErrors,
         email: "Por favor complete este campo.",
       }));
     } else if (userData.email.length > 35) {
       setErrors((prevErrors) => ({
         ...prevErrors,
         email: "No puede superar los 35 caracteres",
       }));
     } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/.test(userData.email)) {
       setErrors((prevErrors) => ({
         ...prevErrors,
         email: "Email inválido",
       }));
     } else {
       setErrors((prevErrors) => ({
         ...prevErrors,
         email: "",
       }));
     }
   
     if (userData.password.length < 6 || userData.password.length > 10) {
       setErrors((prevErrors) => ({
         ...prevErrors,
         password: "Longitud de password inválida",
       }));
     } else if (!/\d/.test(userData.password)) {
       setErrors((prevErrors) => ({
         ...prevErrors,
         password: "Debe contener al menos un número",
       }));
     } else {
       setErrors((prevErrors) => ({
         ...prevErrors,
         password: "",
       }));
     }
   };
   
   export default validation;
   

