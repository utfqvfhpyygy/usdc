import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/** Send phones/narrow viewports to H5; desktop to Web. */
export default function HomeRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const narrow =
      typeof window !== "undefined" &&
      (window.matchMedia("(max-width: 768px)").matches ||
        /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent));
    navigate(narrow ? "/h5" : "/web", { replace: true });
  }, [navigate]);

  return (
    <div className="grid min-h-screen place-items-center bg-[#faf8ff] text-[#424656]">
      Loading KnockNok…
    </div>
  );
}
