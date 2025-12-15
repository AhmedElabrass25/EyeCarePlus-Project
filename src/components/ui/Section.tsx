import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
}

export const Section = ({ className, containerClassName, children, ...props }: SectionProps) => {
  return (
    <section className={cn('py-16 md:py-24', className)} {...props}>
      <div className={cn('container mx-auto px-4 md:px-6', containerClassName)}>
        {children}
      </div>
    </section>
  );
};
