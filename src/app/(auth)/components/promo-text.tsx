export type PromoTextProps = {
  children: React.ReactNode;
};

export function PromoText({ children }: PromoTextProps) {
  return (
    <div className="text-xl text-primary-surface-text-weak">{children}</div>
  );
}
