import MASSAGE from "../../../public/assests/icon/Vector (13).png";
import PHONE from "../../../public/assests/icon/Vector (11).png";
import LOCATION from "../../../public/assests/icon/Vector (12).png";

export const GETINTECHCARDDATA = [
  {
    id: 0,
    img: MASSAGE,
    titile: "Send us an email",
    cardColor: false,
  },
  {
    id: 1,
    img: PHONE,
    titile: (
      <>
        <div>
          <strong>Give us a call</strong>
        </div>
        <div>+92-303-0266005</div>
      </>
    ),
    cardColor: true,
  },
  {
    id: 2,
    img: LOCATION,
    titile: (
      <>
        <div>
          <strong>Our location usa</strong>
        </div>
        <div>London ,United Kingdom</div>
        <div>Lahore, Pakistan</div>

      </>
    ),
    cardColor: false,
  },
];
