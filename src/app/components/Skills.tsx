import React from "react";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type SkillCategory = {
  category: string;
  items: string[];
};

type Skills = SkillCategory[];

interface SkillsListProps {
  skills: Skills;
  className?: string;
}

/**
 * Renders a list of skills as badges, grouped by category
 */
function SkillsList({ skills, className }: SkillsListProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {skills.map((category) => (
        <div key={category.category} className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            {category.category}
          </h3>
          <ul
            className="flex list-none flex-wrap gap-1 p-0"
            aria-label={`List of ${category.category} skills`}
          >
            {category.items.map((skill) => (
              <li key={skill}>
                <Badge className="print:text-[10px]" aria-label={`Skill: ${skill}`}>
                  {skill}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

interface SkillsProps {
  skills: Skills;
  className?: string;
}

/**
 * Skills section component
 * Displays categorized professional skills as badges
 */
export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Skills
      </h2>
      <SkillsList skills={skills} aria-labelledby="skills-section" />
    </Section>
  );
}
