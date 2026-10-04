export function formatForExam(
  topicData: any,
  exam: string
) {
  if (exam === "BPSC") {
    return `
INTRODUCTION

${topicData.introduction}

BIHAR ANGLE

${topicData.biharAngle?.join("\n") || "N/A"}

KEY FACTS

${topicData.keyFacts?.join("\n")}

MAINS

${topicData.mains}
`;
  }

  return `
INTRODUCTION

${topicData.introduction}

KEY FACTS

${topicData.keyFacts?.join("\n")}

MAINS

${topicData.mains}
`;
}