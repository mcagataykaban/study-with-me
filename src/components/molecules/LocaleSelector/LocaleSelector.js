import React from "react";
import { changeLang } from "../../../helpers/changeLang";
import { FlexBox, Button } from "../../";
import i18n from "../../../i18n";


const LocaleSelector = () => {
  return (
    <FlexBox>
      <Button
        selected={i18n.language === "tr" ? true : false}
        onClick={changeLang("tr")}
      >
        TR
      </Button>
      <Button
        selected={i18n.language === "en" ? true : false}
        onClick={changeLang("en")}
      >
        EN
      </Button>
    </FlexBox>
  );
};

export default LocaleSelector;
