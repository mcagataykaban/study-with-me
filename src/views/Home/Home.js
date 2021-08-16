import React from 'react'
import { ContentArea } from '../../components'
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t, i18 } = useTranslation();

    return (
        <ContentArea>
            <h1>{t("hello")}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </ContentArea>
    )
}

export default Home
