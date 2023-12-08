import Head from "next/head";
function CustomHead(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.content} />
      </Head>
    </>
  );
}

export default CustomHead;
