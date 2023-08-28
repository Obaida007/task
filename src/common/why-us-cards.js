import Image from "next/image";
import shutterstock_1902234202 from "../../assets/images/shutterstock_1902234202@2x.png";
import shutterstock_1701327436 from "../../assets/images/shutterstock_1701327436@2x.png";
export const WhyUsCards = [
  {
    imge: (
      <Image
        priority
        width={300}
        height={277}
        src={shutterstock_1701327436}
        alt="shutterstock_1701327436"
      />
    ),
    discreption: "ACCURATE",
  },
  {
    imge: (
      <Image
        priority
        width={300}
        height={277}
        src={shutterstock_1902234202}
        alt="shutterstock_1902234202"
      />
    ),
    discreption: "FLEXABLE",
  },
];
