import { useEffect, useCallback } from "react";

function RegistrationForm() {
  const handleClickOutside = useCallback((event) => {
    // Your logic to handle clicks outside the registration form
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <form>
      {/* Your registration inputs */}
    </form>
  );
}

export default RegistrationForm;