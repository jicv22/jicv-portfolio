import { forwardRef, Ref, useEffect, useState } from "react";
import { Button, EButtonType, ETextMode, ETextType, Text } from "../../atoms";
import { SocialLinks } from "../../molecules";
import { PageTemplate } from "../../templates";
import { senEmailTo } from "../../utils/emails";
import { getEnvVariable } from "../../utils/environment";

const WelcomePage = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  const [adjustedHeight, setAdjustedHeight] = useState(873);
  function updateHeight() {
    const windowHeight = window.innerHeight;
    const minHeight = 420;

    setAdjustedHeight(Math.max(windowHeight, minHeight));
  }

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
  }, []);

  return (
    <PageTemplate ref={ref} height={adjustedHeight}>
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <Text type={ETextType.H3} alignment="center">
          Jose Isaac Cambronero Valverde
        </Text>
        <Text type={ETextType.T2} alignment="center">
          Full Stack Web & Indie Game Developer
        </Text>
        <Button
          type={EButtonType.CONTENT_ONLY}
          onClick={() =>
            senEmailTo(
              getEnvVariable("PROFESSIONAL_EMAIL"),
              "Contacting from Portfolio"
            )
          }
        >
          <Text type={ETextType.T2} mode={ETextMode.HIGHLIGHTED}>
            jicv8@outlook.com
          </Text>
        </Button>
        <SocialLinks />
      </div>
    </PageTemplate>
  );
});

export default WelcomePage;
