import { Button, EButtonType, ETextType, Text } from "../../atoms";
import { Carousel, TextWithHighlights, TitledComponent } from "../../molecules";
import { PageTemplate } from "../../templates";
import {
  farewellText,
  selfDescription,
  SoftSkills,
  technicalSkills,
} from "./variables";
import { forwardRef } from "react";
import { getEnvVariable } from "../../utils/environment";
import { senEmailTo } from "../../utils/emails";

import profileImage from "/src/assets/imgs/MasterChiefTempImage.jpg";

const AboutMePage = forwardRef<HTMLDivElement>((_, ref) => (
  <PageTemplate ref={ref}>
    <div className="space-y-6">
      <Text type={ETextType.H5}>About Me</Text>
      <div className="space-y-8">
        <div className="space-y-4">
          <img
            src={profileImage}
            alt="Profile Image"
            className="w-24 lg:w-32 2xl:w-44 aspect-square rounded-full object-fill"
          />
          <div className="w-10/12 lg:w-8/12 2xl:w-7/12">
            <TextWithHighlights texts={selfDescription} />
          </div>
        </div>
        <div className="space-y-4">
          <TitledComponent titleAttributes={{ title: "Technical Skills" }}>
            <Carousel>
              {technicalSkills.map((skill, index) => (
                <Button key={`${skill}-${index}`}>
                  <Text type={ETextType.T3}>{skill}</Text>
                </Button>
              ))}
            </Carousel>
          </TitledComponent>
          <TitledComponent titleAttributes={{ title: "Soft Skills" }}>
            <Carousel>
              {SoftSkills.map((skill, index) => (
                <Button key={`${skill}-${index}`} type={EButtonType.OUTLINE}>
                  <Text type={ETextType.T3}>{skill}</Text>
                </Button>
              ))}
            </Carousel>
          </TitledComponent>
        </div>
        <div className="w-10/12 lg:w-8/12 2xl:w-7/12">
          <TextWithHighlights texts={farewellText} />
        </div>
        <Button
          onClick={() =>
            senEmailTo(
              getEnvVariable("PROFESSIONAL_EMAIL"),
              "Contacting from Portfolio"
            )
          }
        >
          <Text type={ETextType.T3}>Send email to jicv8@outlook.com</Text>
        </Button>
      </div>
    </div>
  </PageTemplate>
));

export default AboutMePage;
