import React from "react";
import { Button, EButtonType, ETextMode, ETextType, Text } from "../../atoms";
import { SocialLinks } from "../../molecules";
import { PageTemplate } from "../../templates";

function WelcomePage() {
  return (
    <React.Fragment>
      <div className="h-16" />
      <PageTemplate height={875}>
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <Text type={ETextType.H3}>Jose Isaac Cambronero Valverde</Text>
          <Text type={ETextType.T2}>Full Stack Web & Indie Game Developer</Text>
          <Button type={EButtonType.CONTENT_ONLY}>
            <Text type={ETextType.T2} mode={ETextMode.HIGHLIGHTED}>
              jicv8@outlook.com
            </Text>
          </Button>
          <SocialLinks />
        </div>
      </PageTemplate>
    </React.Fragment>
  );
}

export default WelcomePage;
