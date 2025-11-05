#\!/bin/bash

echo "Completing remaining section updates..."

# Update OrganizersSection
FILE="src/components/sections/OrganizersSection.tsx"
if \! grep -q "SectionWrapper" "$FILE"; then
    sed -i '' '6a\
import {SectionWrapper} from "@/components/ui/SectionWrapper";
' "$FILE"
    sed -i '' 's|<section id="organizers" className="section-padding bg-gradient-subtle relative overflow-hidden">|<SectionWrapper id="organizers" theme="gradient-multi">|' "$FILE"
    sed -i '' 's|</section>|</SectionWrapper>|g' "$FILE"
    echo "✓ OrganizersSection updated"
fi

# Update AgendaSection  
FILE="src/components/sections/AgendaSection.tsx"
if \! grep -q "SectionWrapper" "$FILE"; then
    # Add import after existing imports
    sed -i '' '/^import/a\
import {SectionWrapper} from "@/components/ui/SectionWrapper";
' "$FILE" 2>/dev/null
    # Replace section tag
    sed -i '' 's|<section id="agenda"|<SectionWrapper id="agenda" theme="gradient-soft"|' "$FILE"
    sed -i '' '/className="section-padding/d' "$FILE"
    sed -i '' 's|</section>|</SectionWrapper>|g' "$FILE"
    echo "✓ AgendaSection updated"
fi

# Update SpeakersPartnersSection
FILE="src/components/sections/SpeakersPartnersSection.tsx"
if \! grep -q "SectionWrapper" "$FILE"; then
    sed -i '' '1a\
import {SectionWrapper} from "@/components/ui/SectionWrapper";
' "$FILE"
    sed -i '' 's|<section id="speakers-partners"|<SectionWrapper id="speakers-partners" theme="white"|' "$FILE"
    sed -i '' '/className="section-padding/d' "$FILE"
    sed -i '' 's|</section>|</SectionWrapper>|g' "$FILE"
    echo "✓ SpeakersPartnersSection updated"
fi

echo ""
echo "Building to verify..."
npm run build 2>&1 | tail -10

