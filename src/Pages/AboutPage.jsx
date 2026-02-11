import { useEffect } from "react";

export default function AboutPage() {

  useEffect(() => {
    document.title = "About - DenDanskeButik";
  }, []);

  return (
    <>
      <h1>Om os</h1>
      <p>
        Vi tilbyder et bredt udvalg af produkter til konkurrencedygtige priser.
        Uanset om du leder efter tøj, elektronik eller boligindretning, har vi
        noget for enhver smag. Vores webshop er nem at navigere, og vi tilbyder
        hurtig levering og fremragende kundeservice. Gå på opdagelse i vores
        sortiment og find dine nye favoritter i dag!
      </p>
    </>
  );
}
