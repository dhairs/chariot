import DriverOnboardingForm from "@/components/forms/driverQuestions";

export default function DriverSignUp() {
  return (
    <div className="w-100 h-100 m-8">
      <h1 className="text-3xl font-bold ">Welcome!</h1>
      <p>
        {
          "Get started as a driver for us! Fill out the details below so we can verify you!"
        }
      </p>
      <DriverOnboardingForm />
    </div>
  );
}
