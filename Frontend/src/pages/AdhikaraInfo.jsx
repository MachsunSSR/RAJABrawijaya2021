import React from "react";
import Sections from "../components/Sections";
import Cards from "../components/SekilasCard";
import styles from "./AdhikaraInfo.module.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useArticles } from "../routes/Context";

Aos.init();

const AdhikaraInfo = ({ match }) => {
    const { articles, setArticles } = useArticles();
    return (
        <>
            <Sections
                propsClass={
                    "justify-center items-center min-h-info max-h-info bg-galeri-bg bg-cover bg-no-repeat relative "
                }
                propsClass2={"mt-25 lg:mb-5 xl:mb-5 w-full"}
            >
                <div className="text-right xs:mb-15">
                    <h1
                        className={`batavia text-5xl text-white ${styles.adhikaraInfoHeading}`}
                        data-aos="fade-left"
                    >
                        Abhiyaksa Info
                    </h1>
                    <p
                        className={`text-white pb-5 ${styles.adhikaraInfoDesc}`}
                        data-aos="fade-up"
                    >
                        Informasi terupdate seputar PKKMB RAJA Brawijaya
                    </p>
                </div>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/galeriVector.svg`}
                    alt=""
                    className={`${styles.vector}`}
                />
            </Sections>
            <Sections
                propsClass={"justify-center relative lg:px-20 justify-center "}
                propsClass2={"w-full my-20  w-full "}
            >
                <div className={`${styles.infoCardWrapper}`}>
                    <Link to={`/abhiyaksa-info/info-twibbon`}>
                        <Cards
                            title={"Informasi Twibbon"}
                            bg={"bg-twibbon-bg"}
                        />
                    </Link>
                    <Link to={`/abhiyaksa-info/info-atribut`}>
                        <Cards
                            title={"Informasi Atribut"}
                            bg={"bg-atribut-bg"}
                        />
                    </Link>

                    {articles.length > 0 ? (
                        articles.map((article) => {
                            return (
                                <Link to={`/abhiyaksa-info/${article.slug}`}>
                                    <Cards
                                        title={`${article.title}`}
                                        bg={""}
                                        fetchImg={`http://103.139.244.67${article.image.url}`}
                                    />
                                </Link>
                            );
                        })
                    ) : (
                        <div>loading</div>
                    )}

                    <div></div>

                    {/* <Link to={`/abhiyaksa-info/informasi-lain1`}>
						<Cards title={'Informasi 1'} bg={'bg-sekilas3-bg'}/>
					</Link> */}
                    {/* {articles === ''
						? 'anjing'
						: articles.map((article) => {
								return (
									<Link to={`/abhiyaksa-info/${article.id}`}>
										<Cards
											title={`${article.title}`}
											fetchImg={`http://103.139.244.67${article.image.url}`}
										/>
									</Link>
								);
						  })} */}
                    {/* <Link to={`/abhiyaksa-info/informasi-lain2`} className={`hidden`}> 
						<Cards title={'Informasi 2'} bg={'bg-sekilas1-bg'}/>
					</Link> */}
                </div>
            </Sections>
        </>
    );
};

export default AdhikaraInfo;
