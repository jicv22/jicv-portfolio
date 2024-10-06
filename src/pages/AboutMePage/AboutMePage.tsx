import { ReactNode } from "react";
import { Button, EButtonType, ETextType, Text } from "../../atoms";
import { PageTemplate } from "../../templates";

import profileImage from "/src/assets/imgs/MasterChiefTempImage.jpg";
import { TextWithHighlights } from "../../molecules";
import { farewellText, selfDescription } from "./variables";
import { Carousel } from "../../organism";

const technicalSkills: ReactNode[] = [
  <Button>C++</Button>,
  <Button>Unreal Engine</Button>,
  <Button>Blender</Button>,
  <Button>Figma</Button>,
  <Button>Photoshop</Button>,
  <Button>HTML</Button>,
  <Button>JavaScript</Button>,
  <Button>TypeScript</Button>,
  <Button>React</Button>,
  <Button>GraphQL</Button>,
  <Button>Prisma</Button>,
  <Button>ThreeJS</Button>,
  <Button>Mediapipe</Button>,
  <Button>ClickUp</Button>,
  <Button>Jira</Button>,
];
const SoftSkills: ReactNode[] = [
  <Button type={EButtonType.OUTLINE}>Communication</Button>,
  <Button type={EButtonType.OUTLINE}>Teamwork</Button>,
  <Button type={EButtonType.OUTLINE}>Problem-Solving</Button>,
  <Button type={EButtonType.OUTLINE}>Adaptability</Button>,
  <Button type={EButtonType.OUTLINE}>Critical Thinking</Button>,
  <Button type={EButtonType.OUTLINE}>Emotional Intelligence</Button>,
  <Button type={EButtonType.OUTLINE}>Conflict Resolution</Button>,
  <Button type={EButtonType.OUTLINE}>Assertiveness</Button>,
];

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
              className="w-44 aspect-square rounded-full object-fill"
            />
            <div className="w-7/12">
              <TextWithHighlights texts={selfDescription} />
            </div>
          </div>
          <div className="space-y-4">
            <Carousel title="Technical Skills" elements={technicalSkills} />
            <Carousel title="Soft Skills" elements={SoftSkills} />
          </div>
          <div className="w-7/12">
            <TextWithHighlights texts={farewellText} />
          </div>
          <Button>
            Send email to <b>jicv8@outlook.com</b>
          </Button>
        </div>
      </div>
    </PageTemplate>
  );
}

export default AboutMePage;
