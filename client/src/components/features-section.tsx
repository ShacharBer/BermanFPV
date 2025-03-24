const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 md:w-1/3">
      <div className="w-16 h-16 rounded-full bg-[#0F4C81] text-white flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-['Poppins'] font-semibold text-xl mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-2xl">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      title: "Expert Repairs",
      description: "Quick turnaround on all FPV drone repairs with professional, experienced technicians."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-2xl">
          <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.743-.95l.19-1.51c.008-.07-.013-.141-.06-.187l-.59-.59a.981.981 0 0 0-.837-.276c-.47.07-.802.48-.743.95l.19 1.51c.008.07-.013.141-.06.187l-1.36 1.36c-.472.471-1.1.731-1.74.731-.64 0-1.27-.26-1.74-.73l-.59-.59a.99.99 0 0 1-.276-.838c.07-.47.48-.802.95-.743l1.5.19c.08.01.15-.01.19-.06l1.37-1.37c.47-.47.706-1.087.706-1.704s-.235-1.233-.706-1.704l-.52-.52a.644.644 0 0 1-.189-.462c0-.185.074-.355.189-.47l1.068-1.068"/>
          <path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.34L12.64 2.46a1.269 1.269 0 0 0-1.592 0l-.796.856a1.269 1.269 0 0 1-1.592 0L7.86 2.46a1.269 1.269 0 0 0-1.592 0l-.796.856a1.269 1.269 0 0 1-1.592 0L3.084 2.46a1.269 1.269 0 0 0-1.592 0l-.796.856a1.269 1.269 0 0 1-1.592 0l-.796-.856"/>
          <path d="M14.232 7.656a1.269 1.269 0 0 1-.796-.34L12.64 6.46a1.269 1.269 0 0 0-1.592 0l-.796.856a1.269 1.269 0 0 1-1.592 0L7.86 6.46a1.269 1.269 0 0 0-1.592 0l-.796.856a1.269 1.269 0 0 1-1.592 0L3.084 6.46a1.269 1.269 0 0 0-1.592 0l-.796.856a1.269 1.269 0 0 1-1.592 0l-.796-.856"/>
          <path d="M14.232 11.656a1.269 1.269 0 0 1-.796-.34l-.796-.856a1.269 1.269 0 0 0-1.592 0l-.796.856a1.269 1.269 0 0 1-1.592 0l-.796-.856a1.269 1.269 0 0 0-1.592 0l-.796.856a1.269 1.269 0 0 1-1.592 0l-.796-.856a1.269 1.269 0 0 0-1.592 0l-.796.856a1.269 1.269 0 0 1-1.592 0l-.796-.856"/>
        </svg>
      ),
      title: "Custom Builds",
      description: "Personalized FPV drone builds designed for your specific needs and flight preferences."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-2xl">
          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
          <path d="M12 2v2"/>
          <path d="M12 22v-2"/>
          <path d="m17 20.66-1-1.73"/>
          <path d="M11 10.27 7 3.34"/>
          <path d="m20.66 17-1.73-1"/>
          <path d="m3.34 7 1.73 1"/>
          <path d="M14 12h8"/>
          <path d="M2 12h2"/>
          <path d="m20.66 7-1.73 1"/>
          <path d="m3.34 17 1.73-1"/>
          <path d="m17 3.34-1 1.73"/>
          <path d="m11 13.73-4 6.93"/>
        </svg>
      ),
      title: "Training & Support",
      description: "Learn to fly, maintain, and optimize your FPV drone with our expert guidance."
    }
  ];

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
