import React from 'react'
import { ContentArea } from '../../components'
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t, i18 } = useTranslation();

    return (
        <ContentArea>
            <h1>{t("hello")}</h1>
            <p>{t("loremIpsum")}</p>
        </ContentArea>
    )
}

export default Home
