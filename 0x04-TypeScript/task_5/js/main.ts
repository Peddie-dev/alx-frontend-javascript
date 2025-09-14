// Interface for MajorCredits
export interface MajorCredits {
  credits: number;
  // Brand property makes this type unique
  __brand: "MajorCredits";
}

// Interface for MinorCredits
export interface MinorCredits {
  credits: number;
  // Brand property makes this type unique
  __brand: "MinorCredits";
}

// Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: "MajorCredits" };
}

// Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: "MinorCredits" };
}






