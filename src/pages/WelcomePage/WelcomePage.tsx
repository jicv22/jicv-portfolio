import { useEffect, useState } from "react";
import { Button, EButtonType, ETextMode, ETextType, Text } from "../../atoms";
import { SocialLinks } from "../../molecules";
import { PageTemplate } from "../../templates";

function WelcomePage() {
  const [adjustedHeight, setAdjustedHeight] = useState(873);

  function updateHeight() {
    const windowHeight = window.innerHeight;
    const minHeight = 420;
    const fixedHeight = windowHeight - 60;

    setAdjustedHeight(Math.max(fixedHeight, minHeight));
  }

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
  }, []);

  return (
    <PageTemplate height={adjustedHeight}>
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <Text type={ETextType.H1}>Jose Isaac Cambronero Valverde</Text>
        <Text type={ETextType.T1}>Full Stack Web & Indie Game Developer</Text>
        <Button type={EButtonType.CONTENT_ONLY}>
          <Text type={ETextType.T1} mode={ETextMode.HIGHLIGHTED}>
            jicv8@outlook.com
          </Text>
        </Button>
        <SocialLinks />
      </div>
    </PageTemplate>
  );
}

export default WelcomePage;