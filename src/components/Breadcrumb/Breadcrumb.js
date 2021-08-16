import React from 'react';
import { useTranslation } from "react-i18next";


const Breadcrumb = ({ text }) => {
  const { t, i18 } = useTranslation();

    return (
        <div>
            {t(text)}
        </div>
    )
}

export default Breadcrumb
