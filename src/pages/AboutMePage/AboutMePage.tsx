import { Button, EButtonType, ETextType, Text } from "../../atoms";
import { PageTemplate } from "../../templates";

import profileImage from "/src/assets/imgs/MasterChiefTempImage.jpg";
import { TextWithHighlights } from "../../molecules";
import {
  farewellText,
  selfDescription,
  SoftSkills,
  technicalSkills,
} from "./variables";
import { Carousel } from "../../organisms";

function AboutMePage() {
  return (
    <PageTemplate>
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
            <Carousel
              titleAttributes={{ title: "Technical Skills" }}
              elements={technicalSkills.map((skill, index) => (
                <Button key={`${skill}-${index}`}>
                  <Text type={ETextType.T3}>{skill}</Text>
                </Button>
              ))}
            />
            <Carousel
              titleAttributes={{ title: "Soft Skills" }}
              elements={SoftSkills.map((skill, index) => (
                <Button key={`${skill}-${index}`} type={EButtonType.OUTLINE}>
                  <Text type={ETextType.T3}>{skill}</Text>
                </Button>
              ))}
            />
          </div>
          <div className="w-10/12 lg:w-8/12 2xl:w-7/12">
            <TextWithHighlights texts={farewellText} />
          </div>
          <Button>
            <Text type={ETextType.T3}>Send email to jicv8@outlook.com</Text>
          </Button>
        </div>
      </div>
    </PageTemplate>
  );
}

export default AboutMePage;
