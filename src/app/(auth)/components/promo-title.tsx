import { Text } from '@/lib/ui';

export type PromoTitleProps = {
  children: React.ReactNode;
};

export function PromoTitle({ children }: PromoTitleProps) {
  return (
    <Text as="div" variant="h1">
      {children}
    </Text>
  );
}
