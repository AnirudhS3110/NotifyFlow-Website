import { ArchitectureOverview } from "@/components/ArchitectureOverview";
import { CoreComponents } from "@/components/CoreComponents";
import { DevelopmentProgress } from "@/components/DevelopmentProgress";
import { EngineeringChallenges } from "@/components/EngineeringChallenges";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProblemStatement } from "@/components/ProblemStatement";
import { Roadmap } from "@/components/Roadmap";
import { TechStack } from "@/components/TechStack";
import { WhatNotifyFlowSolves } from "@/components/WhatNotifyFlowSolves";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <EngineeringChallenges />
        <WhatNotifyFlowSolves />
        <ArchitectureOverview />
        <CoreComponents />
        <DevelopmentProgress />
        <TechStack />
        <Roadmap />
      </main>
      <Footer />
    </>
  );
}
