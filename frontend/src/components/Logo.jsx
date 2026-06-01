const LOGO_URL = "https://customer-assets.emergentagent.com/job_cargo-command-center-2/artifacts/02nnkgtp_FW%20WORLDWIDE%20Word%20Logo%20Design-2.png";

export const Logo = ({ variant = "light", size = "md", withTagline = false }) => {
  const heights = {
    sm: "h-10",
    md: "h-12",
    lg: "h-20",
    xl: "h-28",
  };
  const wordSize = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };
  const wordColor = variant === "light" ? "text-white" : "text-fw-navy";
  const tagColor = variant === "light" ? "text-white/60" : "text-fw-navy/60";

  return (
    <div className="flex items-center gap-3" data-testid="fw-logo">
      <img
        src={LOGO_URL}
        alt="FW Worldwide"
        className={`${heights[size]} w-auto object-contain select-none shrink-0`}
        draggable={false}
      />
      <div className="flex flex-col leading-none">
        <span className={`fw-heading ${wordSize[size]} ${wordColor} tracking-wide`}>
          FW WORLDWIDE
        </span>
        {withTagline && (
          <span className={`fw-label ${tagColor} mt-1 text-[0.6rem]`}>
            FORWARD. ALWAYS.
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
