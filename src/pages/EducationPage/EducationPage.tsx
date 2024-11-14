import { forwardRef } from "react";
import { EducationItem } from "../../molecules";
import { PageTemplate } from "../../templates";

const EducationPage = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <PageTemplate ref={ref} isPageUp>
      <div className="space-y-6">
        <EducationItem
          mainTitle="Education"
          achievements={[
            {
              achievement: "Bachelor's degree in Systems Engineering",
              institute: "Universidad Nacional de Costa Rica - May. 2024",
              description:
                "Throughout my university studies, I have gained valuable experience in both managing and programming highly complex projects, ensuring their maintenance and technical support. Additionally, I have developed a strong ability to adapt to any situation that may arise in a dynamic and demanding environment.",
            },
          ]}
        />
        <EducationItem
          mainTitle="Certificates"
          achievements={[
            {
              achievement: "Game Development with Unreal Engine",
              institute: "Udemy - Carlos Coronado - Aug. 19 2024",
              description:
                "Gained knowledge across essential areas of game development, including AI, animation programming, gameplay programming, level design, optimization, visual effects, lighting, user interfaces and project deployment using Unreal Engine.",
            },
          ]}
        />
      </div>
    </PageTemplate>
  );
});

export default EducationPage;
