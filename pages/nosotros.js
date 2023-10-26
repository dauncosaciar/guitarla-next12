import Link from "next/link";
import Layout from "../components/layout";

export default function Nosotros() {
  return (
    <Layout title="Nosotros" description="Sobre Nosotros, GuitarLA, tienda de música">
      Nosotros.js
      <Link href="/">Ir a inicio</Link>
    </Layout>
  );
}
