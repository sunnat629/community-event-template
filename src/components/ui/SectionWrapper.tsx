// Reusable Section Wrapper Component
// Applies consistent theming, dividers, and styling

import {type ReactNode} from 'react';
import {getSectionClasses, hasDivider, getDividerClasses, type SectionTheme} from '@/config/sectionThemes.config';

export interface SectionWrapperProps {
    id?: string;
    theme?: SectionTheme;
    children: ReactNode;
    className?: string;
    containerClassName?: string;
    noPadding?: boolean;
    noContainer?: boolean;
}

export const SectionWrapper = ({
                                   id,
                                   theme = 'white',
                                   children,
                                   className = '',
                                   containerClassName = '',
                                   noPadding = false,
                                   noContainer = false
                               }: SectionWrapperProps) => {
    const sectionClasses = noPadding ? '' : getSectionClasses(theme);
    const hasTopDivider = hasDivider(theme, 'top');
    const hasBottomDivider = hasDivider(theme, 'bottom');

    return (
        <section
            id={id}
            className={`${sectionClasses} ${className} overflow-hidden`}
        >
            {/* Top Divider */}
            {hasTopDivider && (
                <div className={getDividerClasses(theme, 'top')}/>
            )}

            {/* Content Container */}
            {noContainer ? (
                children
            ) : (
                <div className={`section-container relative z-10 ${containerClassName}`}>
                    {children}
                </div>
            )}

            {/* Bottom Divider */}
            {hasBottomDivider && (
                <div className={getDividerClasses(theme, 'bottom')}/>
            )}
        </section>
    );
};
