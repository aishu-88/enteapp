import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title } = feature;

  return (
    <div className="w-full">
      <div className="wow fadeInUp transform transition duration-300 hover:scale-110 text-center" data-wow-delay=".15s">

        {/* Bigger centered icon */}
        <div className="mb-6 flex h-[90px] w-[90px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mx-auto">
          <div className="scale-125">
            {icon}
          </div>
        </div>

        {/* Centered title */}
        <h3 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl text-center">
          {title}
        </h3>

      </div>
    </div>
  );
};

export default SingleFeature;
