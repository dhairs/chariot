import OnboardingForm from "@/components/forms/riderQuestions";

export default function Onboarding() {
  return (
    <div className="w-100 h-100 m-8">
      <h1 className="text-3xl font-bold ">Welcome!</h1>
      <p>
        {
          "We're happy you're here, to get started, fill out the details below so you can get started!"
        }
      </p>
      <OnboardingForm />
    </div>
  );
}
