import { useEffect, useState } from "react";
import useExchanger from "../../hooks/useExchanger";
import useExchangeRate from "../../hooks/useExchangeRate";
import Loading from "../common/Loading";
import Exchanger from "./Exchanger";
import ExchangeRate from "./ExchangeRate";

export const ExchangeContainer = () => {
  const [country, setCountry] = useState({
    korName: "유로",
    enName: "EUR",
  });
  const { isReady, exchangeRateInfo, loadExchangeRateInfo } = useExchangeRate();
  const { input, result, exchangeToKrw } = useExchanger();

  useEffect(() => {
    loadExchangeRateInfo(country.enName);
  }, [country]);

  return (
    <>
      {isReady ? (
        <>
          <ExchangeRate country={country} exchangeRateInfo={exchangeRateInfo} />
          <Exchanger
            country={country}
            input={input}
            result={result}
            exchangeToKrw={exchangeToKrw}
            basePrice={exchangeRateInfo.basePrice}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
