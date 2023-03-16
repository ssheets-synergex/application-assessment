import { FC } from "react";
import { AssessmentCategoryCard } from "..";
import BuildIcon from "@mui/icons-material/Build";
import HttpsIcon from "@mui/icons-material/Https";
import HandshakeIcon from "@mui/icons-material/Handshake";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";

export const AssessmentCategoryCardsContent: FC = () => (
  <>
    <AssessmentCategoryCard
      icon={<BuildIcon fontSize="medium" />}
      category="Maintainability"
      categoryHref="https://www.synergex.com/solutions-development-environment-optimization/"
      categoryDescription="Bring that 30-year-old code base into a more modern, useful, and
          appealing developer environment. All while protecting and evolving
          your code base."
    />
    <AssessmentCategoryCard
      icon={<IntegrationInstructionsIcon fontSize="medium" />}
      category="Integration"
      categoryHref="https://www.synergex.com/solutions-enterprise-application-integration/"
      categoryDescription="Securely and fluidly integrate with your business—and others.
          Expedite the extension of applications by quickly and securely
          opening up your business logic and data."
    />
    <AssessmentCategoryCard
      icon={<HttpsIcon fontSize="medium" />}
      category="Security"
      categoryHref="https://www.synergex.com/solutions-security/"
      categoryDescription="Uncover potential vulnerabilities and/or create a disaster
          recovery plan so you can bounce back from successful attacks."
    />
    <AssessmentCategoryCard
      icon={<ViewQuiltIcon fontSize="medium" />}
      category="Usability"
      categoryHref="https://www.synergex.com/solutions-ui-ux/"
      categoryDescription="Our lives today take place via web, mobile or touch screens. Now
          you can add commensurate modern user interfaces and experiences
          (UI/UX) to your proven business systems."
    />
    <AssessmentCategoryCard
      icon={<HandshakeIcon fontSize="medium" />}
      category="Reliability"
      categoryHref="https://www.synergex.com/solutions-high-availability/"
      categoryDescription="Choose a solution that enables you to minimize downtime for your
          applications and boost their resilience."
    />
    <AssessmentCategoryCard
      icon={<RocketLaunchIcon fontSize="medium" />}
      category="Future"
      categoryHref="https://www.synergex.com/solutions-legacy-applications/"
      categoryDescription="Legacy application modernization is a powerful and safe way to
          help ensure your company’s success, far into the future. Think
          evolution, not revolution."
    />
  </>
);
