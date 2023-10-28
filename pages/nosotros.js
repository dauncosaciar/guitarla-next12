import Image from "next/future/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout title="Nosotros" description="Sobre Nosotros, GuitarLA, tienda de música">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio.
              Lectus nulla at volutpat diam ut venenatis tellus. Morbi non arcu risus quis varius
              quam quisque id. Adipiscing commodo elit at imperdiet. Diam sollicitudin tempor id eu
              nisl nunc mi ipsum faucibus.
            </p>

            <p>
              Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Posuere morbi
              leo urna molestie at elementum eu facilisis sed. Mattis enim ut tellus elementum.
              Parturient montes nascetur ridiculus mus mauris vitae. Tincidunt praesent semper
              feugiat nibh sed pulvinar proin gravida hendrerit. Sit amet consectetur adipiscing
              elit duis tristique.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
