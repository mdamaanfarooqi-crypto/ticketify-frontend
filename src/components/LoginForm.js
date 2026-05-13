import { useEffect, useCallback } from "react";

function LoginForm() {
  const handleClickOutside = useCallback((event) => {
    // Your logic to handle clicks outside the form
  }, []); // no dependencies inside, so safe

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]); // ✅ include in dependency array

  return (
    <form>
      {/* Your form inputs */}
    </form>
  );
}

export default LoginForm;